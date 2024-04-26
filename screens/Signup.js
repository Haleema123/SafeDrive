import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import * as Yup from "yup";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";  
const SignupScreen = () =>{ 
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[confirmPassword,setConfirmPassword] = useState();
    const[contactNumber,setContactNumber] = useState();
    const[licenseNumber,setLicenseNumber] = useState();
    const[agreeToTerms, setAgreeToTerms] = useState(false);
    const[pressedButton, setPressedButton] = useState("button2");
    const navigation = useNavigation();

    const validationScehma = Yup.object().shape({
        name: Yup.string().required().label("Name"),
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(6).label("Password"),
        confirmPassword: Yup.string()
          .required()
          .oneOf([Yup.ref("password"), null], "Passwords must match"),
        contactNumber: Yup.number().required().label("Contact Number"),
        licenseNumber: Yup.number().required().label("License Number"),
        agreeToTerms: Yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
    });
      
    const handleButtonPress = (buttonName) => {
        setPressedButton(buttonName);
        if(buttonName=="button1"){navigation.navigate("Dashboard")}
        else if(buttonName=="button3"){}
        else if(buttonName=="button4"){}
    };
    const isButtonPressed = (buttonName) => {
        return buttonName === pressedButton;
    };
    const handleSubmit = async () => {
        try {
            await validationScehma.validate({
                name,
                email,
                password,
                confirmPassword,
                contactNumber,
                licenseNumber,
                agreeToTerms,
            });
        }
        catch (error) {
            Alert.alert("Error", error.message);
        }
        navigation.navigate("Dashboard");
}
    const handleLogin = () => {
        // Handle login redirection here
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#183E5A" />
            <Text style={styles.h2}>Choose an account type</Text>
            <View style={styles.view1}>
                <View>
                    <TouchableOpacity
                        style={[
                        styles.button1,
                        isButtonPressed("button1") && styles.buttonPressed,
                        ]}
                        onPress={() => handleButtonPress("button1")}
                    >
                        <Image
                        style={styles.img2}
                        source={require("../assets/admin.png")}
                        />
                        <Text style={styles.textAdmin}>Admin</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity
                        style={[
                        styles.button1,
                        isButtonPressed("button2") && styles.buttonPressed,
                        ]}
                        onPress={() => handleButtonPress("button2")}
                    >
                    <Image
                    style={styles.imgDriver}
                    source={require("../assets/driv.png")}
                    />
                    <Text style={styles.textDriver}>Driver</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity
                        style={[
                        styles.button1,
                        isButtonPressed("button3") && styles.buttonPressed,
                        ]}
                        onPress={() => handleButtonPress("button3")}
                    >
                        <Image
                        style={styles.imgHosp}
                        source={require("../assets/hosptl.png")}
                        />
                        <Text style={styles.textHosp}>Hospital</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 25 }}>
                    <TouchableOpacity
                        style={[
                        styles.button1,
                        isButtonPressed("button4") && styles.buttonPressed,
                        ]}
                        onPress={() => handleButtonPress("button4")}
                    >
                        <Image
                        style={styles.img21}
                        source={require("../assets/ambl.png")}
                        />
                        <Text style={styles.imgText}>Ambulance</Text>
                    </TouchableOpacity>
                </View>
            </View>
        <TextInput
        style={styles.input}
        placeholder="Username"
        value={name}
        onChangeText={setName}
        />
        <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        />
        <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        />
        <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        />
        <TextInput
        style={styles.input}
        placeholder="Contact number"
        secureTextEntry
        value={contactNumber}
        onChangeText={setContactNumber}
        />
        <TextInput
        style={styles.input}
        placeholder="License number"
        secureTextEntry
        value={licenseNumber}
        onChangeText={setLicenseNumber}
        />
        <View style={styles.checkboxContainer}>
            <TouchableOpacity
                onPress={() => setAgreeToTerms(!agreeToTerms)}>
                <View
                    style={[
                    styles.checkbox,
                    agreeToTerms && styles.checkboxChecked,
                    ]}
                />
                </TouchableOpacity>
                <Text style={styles.checkboxText}>
                I agree to the terms and conditions
                </Text>
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={()=>handleSubmit(name,
      email,
      password,
      confirmPassword,
      contactNumber,
      licenseNumber,
      agreeToTerms,)}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
        </View>
    );
};

    const styles = StyleSheet.create({
    view1: {
        flex: 0,
        flexDirection: "row",
        width: 310,
        marginTop: -60,
        marginBottom: 25,
    },
    img2: {
        height: 60,
        width: 60,
        marginTop: -2,
        marginLeft: 0,
        tintColor: "#183E5A",
    },
    img21: {
        height: 60,
        width: 60,
        marginTop: -2,
        marginLeft: 10,
        tintColor: "#183E5A",
    },
    imgDriver: {
        height: 90,
        width: 100,
        marginTop: -13,
        tintColor: "#183E5A",
    },
    imgHosp: {
        height: 70,
        width: 75,
        marginTop: -5,
        marginLeft: -5,
        tintColor: "#183E5A",
    },
    imgText: {
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 12,
        marginLeft: 7,
        color: "black",
    },
    textDriver: {
        fontWeight: "bold",
        fontSize: 14,
        marginTop: -5,
        marginLeft: 30,
        color: "black",
    },
    textHosp: {
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 5,
        marginLeft: 7,
        color: "black",
    },
    textAdmin: {
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 15,
        marginLeft: 8,
        color: "black",
    },
    h2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    button1: {
        borderRadius: 15,
        marginTop: 80,
        paddingTop: -30,
        marginLeft: -12,
    },
    buttonPressed: {
        backgroundColor: "rgba(0,0,0,0.2)",
        borderRadius: 5,
        marginTop: 80,
    },
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#F2F2F2",
    },
    input: {
        width: "90%",
        height: 48,
        borderWidth: 1,
        borderColor: "#183E5A",
        padding: 8,
        marginBottom: 10,
        borderRadius:15,
        borderWidth:1
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 5,
        marginLeft: 0,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: "black",
        marginRight: 8,
    },
    checkboxChecked: {
        backgroundColor: "#183E5A",
    },
    checkboxText: {
        fontSize: 16,
        color: "#687089",
        marginRight: 47,
    },
    button: {
        width: "90%",
        height: 48,
        backgroundColor: "#183E5A",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    loginText: {
        color: "#183E5A",
        textDecorationLine: "underline",
    },
    signupButton:{
        backgroundColor:'#183E5A',
        width:200,
        height:40,
        borderRadius:15,
        justifyContent:'center',
        marginBottom:10
    },
    signupButtonText:{
        color:'white',
        textAlign:"center",
        fontSize:15,
        fontWeight:'600'
    }
    });
export default SignupScreen;
