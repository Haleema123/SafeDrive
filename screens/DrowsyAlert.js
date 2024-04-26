import { View, Text, StyleSheet, Image, TouchableOpacity,Button } from 'react-native';
const AccidentAlertScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.accidentText}>Accident Detected!!!</Text>
        <Image style={styles.bellStyle}
            source={require("../assets/bell.png")} 
        />
        <Text style={styles.text}>Are you able to drive?</Text>
        <View style={styles.view}>
            <TouchableOpacity>
                <Text style={styles.button1}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.button2}>No</Text>
            </TouchableOpacity>
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
    backgroundColor: '#2F2F2F',
  },
  accidentText:{
    color:"white",
    fontSize:22,
    fontWeight:'600',
    textAlign:'center',
    top:20
  },
  bellStyle:{
   top:100,
   marginLeft:80
  },
  text:{
    color:"white",
    fontSize:22,
    fontWeight:'600',
    marginLeft:24,
    top:150
  },
  button1:{
    backgroundColor:'#2EB74C',
    color:'white',
    fontSize:17,
    fontWeight:"600",
    height:60,
    width:127,
    marginRight:70,
    textAlign:'center',
    padding:18,
    borderRadius:15
  },
  button2:{
    backgroundColor:'red',
    color:'white',
    fontSize:17,
    fontWeight:"600",
    height:60,
    width:127,
    textAlign:'center',
    padding:18,
    borderRadius:15
  },
  footer:{
    backgroundColor:'#183E5A',
    height:60,
    marginTop:10,
    width:"100%",
    top:90, 
  },
  view:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:220
  }
});

export default AccidentAlertScreen;
