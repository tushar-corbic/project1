import { Text, View, Image, StyleSheet, TextInput,TouchableOpacity } from "react-native";
import { windowWidth, windowHeight } from "../../utils/helperFunctions";
import { Dimensions } from 'react-native';
// import { TextInput } from "react-native-gesture-handler";
import React, { useState } from "react"
const Login = () => {
    const [number, setNumber] = useState("")
    const handleNumberChange = (text) => {
        setNumber(text);
    }
    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/react-logo.png")}
                style={styles.image}
            />

            <View
                style={styles.nonImage}
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
                    <TouchableOpacity style={styles.submitButton}>

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
    nonImage: {
        marginTop: 20,
        flex: 1,
        borderWidth: 2,
        borderColor: 'black'
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
        borderWidth: 3,
        height: windowHeight(1),
        width: windowWidth(1),
        padding: 30,
        marginLeft: 20,
        maringRight: 80,
        marginTop: 20,
        marginBottom: 20,
        flex: 1,
        borderColor: 'black'
    }
})
export default Login;