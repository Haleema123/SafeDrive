import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,Alert
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import * as Yup from "yup";

function LoginScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(true);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
  });
  const handleLogin =async () => {
    try {
      await validationSchema.validate({
          email,
          password,
      });
      navigation.navigate("Dashboard");
  }
    catch (error) {
        Alert.alert("Error", error.message);
    }
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    // navigation.navigate("ForgotPassword");
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    navigation.navigate("Sign up");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/Logo.png")}
        />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputStyle}>
          <MaterialIcons name="person" style={styles.iconStyle} />
          <TextInput
            placeholder="Enter your Username"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.inputStyle}>
          <MaterialIcons name="lock" style={styles.iconStyle} />
          <TextInput
            secureTextEntry={passwordVisible}
            placeholder="Enter your password"
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <MaterialIcons
              name={passwordVisible ? "visibility-off" : "visibility"}
              style={styles.iconStyle1}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        underlayColor="transparent"
        onPress={handleForgotPassword}
      >
        <Text style={styles.navigatorText}>Forgot Your Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        underlayColor="transparent"
        onPress={handleSignUp}
      >
        <Text style={styles.navigatorText}>New? Sign up here.</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    marginTop:80
  },
  imageContainer: {
    marginBottom: 50,
  },
  imageStyle: {
    height: 100,
    width: 200,
    tintColor: '#183E5A',
  },
  inputContainer: {
    width: "80%",
  },
  inputStyle: {
    flexDirection: "row",
    borderColor: "#183E5A",
    height: 50,
    borderWidth: 1,
    borderRadius:15,
    marginBottom: 20,
    paddingLeft: 10,
    alignItems: "center",
  },
  iconStyle: {
    fontSize: 25,
    color: "#183E5A",
  },
  iconStyle1: {
    marginLeft: 80,
    fontSize: 25,
    color: "#183E5A",
  },
  loginButton: {
    backgroundColor: "#183E5A",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginTop:10,
    marginBottom:10
  },
  buttonText: {
    color: "white",
    fontSize:15,
    fontWeight:'600',
  },
  navigatorText: {
    color: "#183E5A",
    textDecorationLine: "underline",
    marginTop:10
  },
});

export default LoginScreen;
