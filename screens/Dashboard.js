import React, { useState } from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity,StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const DashboardScreen = ({navigation}) => {
  const [getValue, setValue] = useState("Activate Driving Mode");
  function HandleDrivingMode(){
    if (getValue == "Activate Driving Mode") {
      setValue("Deactivate Driving Mode");
      navigation.navigate("Next");
      alert("Driving mode activated");
    }
    else {
      setValue("Activate Driving Mode");
      alert("Driving mode Deactivated");
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#183E5A"/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Safe Drive</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
          <AntDesign style={styles.iconProfile} name="user" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.imageStyle0}
          source={require("../assets/meter.png")} 
        />
        <View style={styles.boxView}>
          <Image
            style={styles.greenImage}
            source={require("../assets/greenBox.png")} 
          />
          <Text style={styles.boxText}>Great</Text>
          <Image
            style={styles.greenImage}
            source={require("../assets/yellowBox.png")} 
          />
            <Text style={styles.boxText}>Average</Text>
          <Image
            style={styles.greenImage}
            source={require("../assets/redBox.png")} 
          />
          <Text style={styles.boxText}>OverSpeed</Text>
        </View>
        <Text style={styles.text}>Driver Statistics</Text>
        <View style={{flexDirection:'row'}}>
          <View style={styles.view01}><Text style={styles.text1}>b</Text></View>
          <View style={styles.view01}><Text style={styles.text1}>b</Text></View>
          <View style={styles.view01}><Text style={styles.text1}>b</Text></View>
        </View>
      </View>
      <TouchableOpacity onPress={()=>HandleDrivingMode()}>
        <Text style ={styles.button}>{getValue}</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
        <View style = {styles.hospital}>
          <TouchableOpacity onPress={()=>navigation.navigate("Hospital")}>
            <Image
              source={require("../assets/hospital.png")} 
            />
            <Text style = {styles.caption} >Hospital</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("Ambulance")}>
          <View style = {styles.hospital}>
            <Image
              source={require("../assets/ambulance.png")}
            />
            <Text style = {styles.caption} >Ambulance</Text>
          </View>
        </TouchableOpacity>
        <View style = {styles.hospital}>
          <TouchableOpacity onPress={()=>navigation.navigate("Map")}>
            <Image
              source={require("../assets/map.png")} 
            />
            <Text style = {styles.caption}>Map</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <View style = {styles.hospital}>
          <Image
            source={require("../assets/emergency.png")} 
          />
          <Text style = {styles.caption} >Emergency</Text>
        </View>
        <View style = {styles.hospital}>
          <TouchableOpacity onPress={()=>navigation.navigate("Help")}>
            <Image
              source={require("../assets/help.png")} 
            />
            <Text style = {styles.caption} >Help</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.hospital}>
          <TouchableOpacity onPress={()=>navigation.navigate("About")}>
            <Image
              source={require("../assets/about.png")} 
            />
            <Text style = {styles.caption}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style = {styles.footer}>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginTop:24
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#183E5A',
    height: 60,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 150,
  },
  iconProfile: {
    flex: 1,
    marginLeft:120,
    marginTop:15
    
  },
  imageView: {
    backgroundColor: 'white',
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius:30,
    elevation: 4,
    alignItems: 'center',
  },
  imageStyle0: {
    width: 195, 
    height: 175, 
    marginTop:15,
    marginBottom:-50
  },
  boxView:{
    flexDirection:'row',
    paddingLeft:25
  },
  greenImage:{
    width: 13, 
    height: 13, 
    marginRight:5
  },
  boxText:{
    top:-3,
    marginRight:20
  },
  text:{
    fontSize:14,
    marginRight:220,
    marginTop:10,
    fontWeight:'600'
  },
  view01:{
    backgroundColor: '#183E5A',
    height:60,
    width:70,
    elevation:4,
    borderRadius:15,
    marginLeft:20,
    marginRight:15,
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
  },
  text1:{
    color:'white'
  },
  button:{
    backgroundColor:'#183E5A',
    color:'white',
    width:312,
    height:66,
    borderRadius:15,
    marginLeft:40,
    textAlign:'center',
    marginTop:20,
    paddingTop:20,
    fontSize:17,
    fontWeight:'500'
  },
  hospital:{
    backgroundColor:'white',
    width:81,
    height:81,
    marginLeft:40,
    marginTop:24,
    borderRadius:15,
    alignItems:'center',
    justifyContent:'center',
    elevation: 4,
    
  },
  caption:{
    fontSize:12,
    fontWeight:'500',
    marginTop:5,
    textAlign:'center'
  },
  footer:{
    backgroundColor:'#183E5A',
    height:60,
    marginTop:10,
    width:"100%",
    top:18, 
  }
});

export default DashboardScreen;
