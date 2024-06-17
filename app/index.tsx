import { Text, View } from "react-native";
// import Navigation from "../navigation/navigation";
import Login from "../screens/authentication/Login";
import Temp from "../screens/authentication/Temp.js";
import OtpVerification from "@/screens/authentication/OtpVerification";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="LOGIN">
        <Stack.Screen name="LOGIN" component={Login} options={{
          headerShown: false,
          }} />
        <Stack.Screen name="TEMP" component={Temp}  options={{
          headerShown: false,
          }}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
