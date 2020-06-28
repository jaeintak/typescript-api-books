import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Edit from '../components/Edit';
import { logout as logoutSaga } from '../redux/modules/auth';

const EditContainer = () => {
  const dispatch = useDispatch();
  const logout = useCallback(() => {
    dispatch(logoutSaga());
  }, [dispatch]);
  return <Edit book={null} loading={false} logout={logout} />;
};

export default EditContainer;
