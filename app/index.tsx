import { Text, View } from "react-native";
import Navigation from "../navigation/navigation";
import Login from "../screens/authentication/Login";
import OtpVerification from "@/screens/authentication/OtpVerification";
export default function Index() {
  return (
    // <Navigation />
    <Login></Login>
    // <OtpVerification></OtpVerification>
  );
}
