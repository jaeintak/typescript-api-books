import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Detail from '../components/Detail';
import { logout as logoutSaga } from '../redux/modules/auth';

const DetailContainer = () => {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);
  return <Detail book={null} logout={logout} />;
};

export default DetailContainer;
