import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/authentication/Login';
import OtpVerification from "../screens/authentication/OtpVerification";
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="OtpVerification" component={OtpVerification} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default  Navigation;