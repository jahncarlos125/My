import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StepOne from '../pages/Initial/StepOne';
import StepTwo from '../pages/Initial/StepTwo';
import StepThree from '../pages/Initial/StepThree';

const InitialStack = createStackNavigator();

const InitialRoutes = () => {
  return (
    <InitialStack.Navigator>
      <InitialStack.Screen
        component={StepOne}
        name="StepOne"
        options={{headerShown: false}}
      />
      <InitialStack.Screen
        component={StepTwo}
        name="StepTwo"
        options={{headerShown: false}}
      />
      <InitialStack.Screen
        component={StepThree}
        name="StepThree"
        options={{headerShown: false}}
      />
    </InitialStack.Navigator>
  );
};

export default InitialRoutes;
