import { Link } from 'react-router-dom';
import { Avatar, Card, Col, Progress, Row, Statistic, Typography } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

type CardCreditCardProps = {
  title: string;
  closeDate: string;
  bank: {
    name: string;
    logo: string;
    color: string;
  };
  currentInvoice: number;
  availableLimit: number;
  totalLimit: number;
  progress: number;
  paymentDate: string;
  usedLimit: number;
  id: string;
};

export function CardCreditCard({
  title,
  closeDate,
  bank,
  currentInvoice,
  availableLimit,
  totalLimit,
  usedLimit,
  progress,
  paymentDate,
  id,
}: CardCreditCardProps) {
  return (
    <Link to={`/credit-cards/${id}`}>
      <Card
        title={title}
        extra={`Fechamento em ${closeDate}`}
        actions={[
          <PieChartOutlined key="graphic" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Row justify="space-between">
          <Card.Meta title={bank.name} avatar={<Avatar src={bank.logo} />} />
          <Statistic
            title="Fatura atual"
            prefix="R$"
            precision={2}
            value={currentInvoice}
          />
        </Row>
        <Col>
          <Row justify="space-between">
            <Statistic
              title="Limite disponível"
              prefix="R$"
              precision={2}
              value={availableLimit}
            />
          </Row>

          <Progress
            status="normal"
            percent={progress}
            strokeColor={bank.color}
            showInfo
          />

          <Row justify="space-between">
            <Typography.Text>{`Vencimento em ${paymentDate}`}</Typography.Text>
            <Typography.Text>{`R$${totalLimit} de R$${usedLimit}`}</Typography.Text>
          </Row>
        </Col>
      </Card>
    </Link>
  );
}