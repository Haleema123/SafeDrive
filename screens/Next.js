import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Camera } from "expo-camera";

const Next = ({ navigation }) => {
  const [startCamera, setStartCamera] = React.useState(false);
  React.useEffect(() => {
    const __startCamera = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status === "granted") {
        // start the camera
        setStartCamera(true);
      } else {
        Alert.alert("Access denied");
      }
    };
    __startCamera();
  }, []);
  return (

      <View style={{ flex: 1 }}>
        {/* //open the mobile camera */}
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.front} />
      </View>
  );
};

export default Next;

const styles = StyleSheet.create({});
