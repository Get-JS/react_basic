import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from 'components/organism/Header/';
import { getUser, logout } from 'redux/user/action';

function Container() {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    // if (!user) dispatch(getUser());
  }, [dispatch, user]);

  return <Header user={user} onLogout={onLogout} />;
}

export default Container;
