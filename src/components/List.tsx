import React from 'react';
import { Table, PageHeader, Button } from 'antd';

import styles from './List.module.css';
import Layout from './Layout';
import Book from './Book';
import { BookResType } from '../types';

interface BooksProps {
  books: BookResType[] | null;
  loading: boolean;
  goAdd: () => void;
  logout: () => void;
}

const Books: React.FC<BooksProps> = ({ books, loading, goAdd, logout }) => {
  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button
            key="2"
            type="primary"
            className={styles.button}
            onClick={goAdd}
          >
            Add Book
          </Button>,
          <Button
            key="1"
            type="primary"
            className={styles.button}
            onClick={logout}
          >
            Logout
          </Button>,
        ]}
      />
      <img src="/bg_list.png" style={{ width: '100%' }} alt="books" />
      <Table
        dataSource={books || []}
        columns={[
          {
            title: 'Book',
            dataIndex: 'book',
            key: 'book',
            render: (text, record) => <Book {...record} key={record.bookId} />,
          },
        ]}
        loading={books === null || loading}
        showHeader={false}
        className={styles.table}
        rowKey="bookId"
        pagination={false}
      />
    </Layout>
  );
};

export default Books;
