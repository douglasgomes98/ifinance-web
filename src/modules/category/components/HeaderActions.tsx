import { Row, Select, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { ButtonAction } from '@/modules/shared/components/ButtonAction';

import { useCategoriesActions } from '../contexts/CategoriesActionsContext';

export function HeaderActions() {
  const { toggleModalCreateCategory } = useCategoriesActions();

  return (
    <Row
      style={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Select
        placeholder="Select a category"
        allowClear
        size="large"
        style={{
          width: 250,
        }}
        options={[
          {
            label: 'Categoria de despesas',
            value: '1',
          },
          { label: 'Categoria de receitas', value: '2' },
        ]}
      />

      <Row
        style={{
          alignItems: 'center',
          gap: 20,
        }}
      >
        <ButtonAction
          icon={<PlusOutlined />}
          onClick={() => toggleModalCreateCategory()}
          size="large"
        />
        <Input.Search
          placeholder="Pesquisar Categoria"
          allowClear
          size="large"
          style={{
            width: 250,
          }}
          // onSearch={onSearch}
        />
      </Row>
    </Row>
  );
}
