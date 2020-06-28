import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import List from '../components/List';
import { logout as logoutSaga } from '../redux/modules/auth';
import { push } from 'connected-react-router';

const ListContainer: React.FC = () => {
  const dispatch = useDispatch();
  const goAdd = useCallback(() => {
    dispatch(push('/add'));
  }, [dispatch]);
  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);
  return <List books={[]} loading={false} goAdd={goAdd} logout={logout} />;
};

export default ListContainer;
