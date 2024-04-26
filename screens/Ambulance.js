import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AmbulanceScreen = ({navigation}) => {
  const url = 'http://jsonplaceholder.typicode.com/comments';
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    setData(result);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.textInput} />
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="white" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Nearby Ambulances</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.Views}>
            <Image
              source={require("../assets/ambul.png")}
              style={styles.hospImage}
            />
            <View>
                <Text style={styles.ambText}>{item.email}</Text>
                <Text style={styles.capStyle}>location</Text>
            </View>
            <View style={styles.requestContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate("AmbulanceRequest")} style={styles.touchableContainer}>
                <Text style={styles.reqText}>Request</Text>
              </TouchableOpacity>
              <Text style={styles.capStyle}>2.5km away</Text>
            </View>
            
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 16,
    borderColor: '#2B5676',
    borderWidth: 1.5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#666666',
    marginRight: 10,
  },
  searchIcon: {
    padding: 10,
    backgroundColor: '#2B5676',
    marginRight: -1,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  text: {
    fontSize: 14,
    marginLeft: 24,
    marginTop: 10,
    marginBottom: 12,
    fontWeight: '500',
    fontSize: 15,
  },
  Views: {
    flexDirection: 'row',
    backgroundColor: '#FAA41D',
    alignItems: 'center',
    paddingLeft: 10,
    marginLeft: 20,
    margin: 6,
    borderRadius: 10,
    borderColor: "#FAA41D",
    borderWidth: 1,
    width: 350,
    height: 72
  },
  hospImage: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  requestContainer: {
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 10,
  },
  touchableContainer: {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: "#FD1209",
    height:25,
    width:70,
    borderRadius: 6,
  },
  reqText: {
    fontSize: 10,
    fontWeight: "500",
    color: 'white',
  },
  ambText:{
    color:'black',
    fontSize: 12,
    fontWeight: "600",
  },
  capStyle:{
    fontSize: 9,
    fontWeight: "500",
  }
});

export default AmbulanceScreen;
