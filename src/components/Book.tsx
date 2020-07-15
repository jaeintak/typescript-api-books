import React from 'react';

import styles from './Book.module.css';
import { BookResType } from '../types';

interface BookProps extends BookResType {}

// [project] 컨테이너에 작성된 함수를 컴포넌트에서 이용했다.
// [project] BookResType 의 응답 값을 이용하여, Book 컴포넌트를 완성했다.
const Book: React.FC<BookProps> = () => {
  return <div className={styles.book}>Book</div>;
};

export default Book;
