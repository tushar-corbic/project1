import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { windowWidth, windowHeight } from "../../utils/helperFunctions";
import { Dimensions } from 'react-native';
// import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react"
import { GenericStyles } from "@/styles/GenericStyles";
const Temp = ({ navigation }) => {
    const [number, setNumber] = useState("")
    const handleNumberChange = (text) => {
        setNumber(text);
    }
    const handleHaveAAccountEvent = () => {
        console.log("Clicking on alreay ahve accoiutn screen")
        // Navigation.navigate("SignIn")
    }
    const handleSubmitMobileButton = () => {
        console.log("clicking on submit mobile button")
        // have to navigate to otp screen
        navigation.navigate("OTP")
    }
    return (
        <View >
      
        <Text>
            TEmp
        </Text>
        </View>
    )
}

export default Temp;