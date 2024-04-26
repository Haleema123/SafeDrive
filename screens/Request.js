import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { FontAwesome,MaterialIcons} from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const RequestScreen = ()=> {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const getLocationAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Location permission denied');
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    getLocationAsync();
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="My Location"
          />
        </MapView>
      )}
      {!location && <Text>Loading...</Text>}
      <Text style={styles.text}>On its Way</Text>
      <View style={styles.view1}>
        <Image
            style={styles.imageStyle}
            source={require("../assets/reqDriver.png")} 
        />
        <Text style={styles.text1}>Driver Name</Text>
        <TouchableOpacity>
            <FontAwesome name="phone-square" size={28} color="#2B5676" style={styles.Icon} />
        </TouchableOpacity>
        <TouchableOpacity>
            <MaterialIcons name="cancel-presentation" size={28} color="#FD1209" style={styles.Icon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text2}>Car Number</Text>
      <View style = {styles.footer}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
  },
  map: {
    width:"100%",
    height:500
  },
  text:{
    fontSize:14,
    fontWeight:'600',
    marginLeft:24,
    top:10
  },
  text1:{
    fontSize:14,
    fontWeight:'600',
    marginLeft:24,
    marginTop:30
  },
  text2:{
    fontSize:12,
    fontWeight:'500',
    marginLeft:95,
    marginTop:30,
    top:-50
  },
  view1:{
    flexDirection:'row'
  },
  imageStyle:{
    marginLeft:24,
    marginTop:30
  },
  Icon:{
    marginTop:30,
    marginLeft:120,
    marginRight:-100,
  },
  footer:{
    backgroundColor:'#183E5A',
    height:60,
    marginTop:-20,
    width:"100%",
  },
});
export default RequestScreen;