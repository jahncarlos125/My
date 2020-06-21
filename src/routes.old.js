import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '~/pages/Main';
import Register from '~/pages/Register';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: 'Cadastro',
          headerTintColor: '#FFF',
          headerStyle: {
            backgroundColor: '#7159c1',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
