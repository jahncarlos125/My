import React from 'react';
import {View} from 'react-native';
import InitialRoutes from './initial.routes';
import AppRoutes from './app.routes';
import {useSelector} from 'react-redux';

const Routes = () => {
  const {users} = useSelector((state) => state.users);
  console.log(users.length);
  return users.length > 0 ? <AppRoutes /> : <InitialRoutes />;
};

export default Routes;
