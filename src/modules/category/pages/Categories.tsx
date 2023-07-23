import { Col } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { HeaderActions } from '../components/HeaderActions';
import { TableCategories } from '../components/TableCategories';
import { ModalCreateCategory } from '../components/ModalCreateCategory';
import { ModalDeleteCategory } from '../components/ModalDeleteCategory';
import { ModalEditCategory } from '../components/ModalEditCategory';

export function Categories() {
  return (
    <>
      <Col
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 20px',
        }}
      >
        <Header
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            display: 'flex',
            width: '100%',
            backgroundColor: '#fff',
          }}
        >
          <HeaderActions />
        </Header>
        <TableCategories />
      </Col>

      <ModalCreateCategory />
      <ModalDeleteCategory />
      <ModalEditCategory />
    </>
  );
}
