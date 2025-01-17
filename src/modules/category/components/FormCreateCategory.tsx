import { useController, useForm } from 'react-hook-form';
import { FormItem } from 'react-hook-form-antd';
import { Form, Input, Radio, Row, Typography } from 'antd';
import { z } from 'zod';
import { BgColorsOutlined } from '@ant-design/icons';
import { zodResolver } from '@hookform/resolvers/zod';

import { defaultColors } from '../constants/defaultColors';
import { CategoryColor } from './CategoryColor';

const { Title } = Typography;

interface FormFields {
  name: string;
  color: string;
}

interface FormCreateCategoryProps {
  onSubmit: (data: FormFields) => void;
}

const schema = z.object({
  name: z
    .string({ required_error: 'Nome é obrigatório' })
    .min(1, 'Nome é obrigatório'),
  color: z
    .string({
      required_error: 'Cor é obrigatória',
    })
    .min(1, 'Cor é obrigatória'),
});

export function FormCreateCategory({ onSubmit }: FormCreateCategoryProps) {
  const { control, handleSubmit } = useForm<FormFields>({
    resolver: zodResolver(schema),
    mode: 'onChange',
    defaultValues: {
      color: defaultColors[0].color,
    },
  });
  const { field } = useController({
    name: 'color',
    control,
  });

  return (
    <Form
      onFinish={handleSubmit(onSubmit)}
      id="create-category"
      size="middle"
      layout="vertical"
    >
      <FormItem name="name" control={control}>
        <Input placeholder="Name" />
      </FormItem>
      <Row
        style={{
          alignItems: 'center',
          gap: 12,
        }}
      >
        <BgColorsOutlined
          style={{
            fontSize: 25,
            color: field.value,
          }}
        />
        <Title level={5}>Selecione uma cor</Title>
      </Row>
      <FormItem name="color" control={control}>
        <Radio.Group
          optionType="button"
          buttonStyle="solid"
          value={field.value}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
          }}
        >
          {defaultColors.map(item => (
            <CategoryColor
              selectedColor={field.value}
              onColorSelected={field.onChange}
              key={item.key}
              value={item.color}
              style={{
                backgroundColor: item.color,
              }}
            />
          ))}
        </Radio.Group>
      </FormItem>
    </Form>
  );
}
