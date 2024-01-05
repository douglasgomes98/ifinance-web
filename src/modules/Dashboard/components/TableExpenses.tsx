import { Table } from 'antd';

import { Expense, useListExpensesQuery } from '@/graphql';
import { useListExpenseData } from '@/modules/expenses/hooks/useListExpensesData';

export function TableExpenses() {
  const { data: expenses } = useListExpensesQuery({
    filter: {
      month: 1,
      year: 2024,
    },
  });

  const { columns, data } = useListExpenseData(
    expenses?.listExpense.expenses as Expense[],
  );

  return <Table columns={columns} dataSource={data} pagination={false} />;
}
