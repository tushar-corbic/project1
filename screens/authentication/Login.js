import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { windowWidth, windowHeight } from "../../utils/helperFunctions";
import { Dimensions } from 'react-native';
// import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react"
import { GenericStyles } from "@/styles/GenericStyles";
const Login = () => {
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
    }
    return (
        <View style={styles.container}>
            <View
                style={styles.imageContainer}
            >
                <Image
                    source={require("../../assets/images/adaptive-icon.png")}
                    style={styles.image}
                />
            </View>
            <View
                style={styles.nonImageContainer}
            >
                <Text style={{ fontWeight: "bold" }}>Enter Mobile Number to Login</Text>
                <View style={styles.mobileNumberWrapper}>
                    <Text
                        style={styles.mobielInputText}
                    >+91 |</Text>
                    <TextInput
                        style={styles.mobileInput}
                        keyboardType='numeric'
                        value={number}
                        onChangeText={handleNumberChange}
                        placeHolder="Enter mobile number"
                    ></TextInput>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmitMobileButton}
                    >
                        <Text style={{ color: "white" }}>Login with mobile</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.justifyContentCenterAlignItemsCenter, GenericStyles.pt10, GenericStyles.pb10, GenericStyles.flex8]} >
                    <Text style={GenericStyles.mb12}> or continue with</Text>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity>
                            <View style={styles.ssoButton}>
                                <Image
                                    source={require("../../assets/images/cross_icon.png")}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.ssoButton}>
                                <Image
                                    source={require("../../assets/images/close_icon.png")}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <TouchableOpacity onPress={handleHaveAAccountEvent}>
                        <Text style={{ color: "blue" }}>
                            I have an account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        // flexDirection: "column",

        // margin:30,
        borderRadius: 15,
        // height: windowHeight(0.5),
        // width: windowWidth(0.7),
        borderColor: 'black',
        borderWidth: 4,
    },
    mobileNumberWrapper: {
        marginTop: 10,
        borderRadius: 15,
        borderWidth: 1,
        flexDirection: 'row',
        padding: 10,
        borderColor: "grey"

    },
    imageContainer: {
        flex: 1,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: 'space-evenly',
    },
    image: {
        flex: 1,
        borderWidth: 2,
        borderColor: "black",
        // resizeMode:"center"
    },
    nonImageContainer: {
        marginTop: 20,
        flex: 1,
        // borderWidth: 2,
        // borderColor: 'black'
    },
    mobileInput: {
        flex: 8,
        // flexDirection:"row"
    },
    mobielInputText: {
        marginTop: 4,
        flex: 2,
        // flexDirection:"row"
    },
    container: {
        // borderWidth: 3,
        height: windowHeight(1),
        width: windowWidth(1),
        padding: 30,
        marginLeft: 20,
        maringRight: 80,
        marginTop: 20,
        marginBottom: 20,
        flex: 1,
        // borderColor: 'black'
    },
    submitButton: {
        borderRadius: 20,
        // borderWidth:2,
        padding: 10,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
    },
    ssoButton: {
        borderRadius: 40,
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        margin: 10,
        width: windowHeight(0.08),
        height: windowHeight(0.08)
    },
    justifyContentCenterAlignItemsCenter: {
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Login;