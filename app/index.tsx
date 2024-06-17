import { Text, View } from "react-native";
// import Navigation from "../navigation/navigation";
import Login from "../screens/authentication/Login";
import Temp from "../screens/authentication/Temp";
import OtpVerification from "@/screens/authentication/OtpVerification";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="OTP" component={OtpVerification} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="TEMP" component={Temp} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Navigation />
    // <Login></Login>
    // <OtpVerification></OtpVerification>
  );
}
