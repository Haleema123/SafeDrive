import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = ()=> {
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
    flex: 1,
    width:'100%',
    height:"100%"
  },
});
export default MapScreen;