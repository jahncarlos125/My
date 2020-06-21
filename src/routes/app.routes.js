import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../pages/Main';

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        component={Main}
        name="Home"
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
