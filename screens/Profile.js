import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { Ionicons,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'; 
import * as ImagePicker from 'expo-image-picker';

const  ProfileScreen =({navigation})=> {
  const [profilePhoto, setProfilePhoto] = React.useState(null);

  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!imagePickerResult.canceled) {
      setProfilePhoto(imagePickerResult.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePicker} style={styles.profileView}>
        {profilePhoto ? (
          <Image source={{ uri: profilePhoto }} style={styles.profilePhoto} />
        ) : (
          <View style={styles.placeholder}>
            <Text>Upload Photo</Text>
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.txtName}>Abcdef</Text>
      <Text style={styles.txtEmail}>abc@gmail.com</Text>
      <View style={styles.viewNotf}>
        <Ionicons name="ios-notifications" size={22} color="#2B5676" style={styles.imagePerInfo}/>
        <Text style={styles.txtNotf}>Notifications</Text>
        <TouchableOpacity style={styles.right} onPress={()=>navigation.navigate("Notification")}>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#2B5676" />
        </TouchableOpacity>
      </View>
      <View style={styles.viewNotf}>
      <FontAwesome5 name="user-plus" size={20} color="#2B5676" style={styles.imagePerInfo}/>
        <Text style={styles.txtNotf}>Medical Information</Text>
        <TouchableOpacity style={styles.right} onPress={()=>navigation.navigate("MedicalInformation")}>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#2B5676"  />
        </TouchableOpacity>
      </View>
      <View style={styles.viewNotf}>
      <MaterialCommunityIcons name="car-info" size={26} color="#2B5676" style={styles.imagePerInfo}/>
        <Text style={styles.txtNotf}>Accident History</Text>
        <TouchableOpacity style={styles.right} onPress={()=>navigation.navigate("Accident History")}>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#2B5676"  />
        </TouchableOpacity>
      </View>
      <View style={styles.viewNotf}>
        <Image style={styles.imagePerInfo}
          source={require("../assets/personInfo.png")}
        />
        <Text style={styles.txtNotf}>Personal Information</Text>
        <TouchableOpacity style={styles.right} onPress={()=>navigation.navigate("Personal Information")}>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#2B5676" />
        </TouchableOpacity>
      </View>
      <View style={styles.viewNotf}>
        <MaterialCommunityIcons name="logout" size={24} color="#2B5676" style={styles.imagePerInfo}/>
        <Text style={styles.txtNotf}>Logout</Text>
        <TouchableOpacity style={styles.right}>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#2B5676"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F2F2F2',
  },
  txtName:{
    textAlign:'center',
    fontSize:17,
    fontWeight:'600',
    marginBottom:5
  },
  txtEmail:{
    textAlign:'center',
    fontSize:12,
    fontWeight:'500',
    marginBottom:10
  },
  viewNotf:{
    backgroundColor: 'white',
    borderRadius:20,
    marginLeft:30,
    marginTop:20,
    width:330,
    height:47,
    flexDirection:'row'
  },
  viewMedcl:{
    backgroundColor: 'white',
    borderRadius:20,
    marginLeft:30,
    marginTop:30,
    width:330,
    height:47,
    flexDirection:'row'
  },
  txtNotf:{
    color:'#2B5676',
    fontWeight:'500',
    fontSize:14,
    fontWeight:'500',
    margin:12
  },
  imagePerInfo:{
    height:27,
    width:26,
    marginLeft:15,
    marginRight:10,
    marginTop:10
  },
  right:{
    position:'absolute',
    marginLeft:280,
    top:10
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  placeholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#CCCCCC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileView:{
    alignItems:'center',
    paddingTop:15
  }
});
export default ProfileScreen;
