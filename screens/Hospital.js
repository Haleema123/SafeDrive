import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const HospitalScreen = () => {
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
      <Text style={styles.text}>Nearby Hospitals</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.Views}>
            <Image
              source={require("../assets/hospt.png")}
              style={styles.hospImage}
            />
            <Text style={styles.direcText}>{item.email}</Text>
            <View style={styles.directionContainer}>
              <TouchableOpacity style={styles.touchableContainer}>
                <MaterialIcons name="directions" size={24} color="white" style={styles.directionIcon} />
                <Text style={styles.direcText}>Direction</Text>
              </TouchableOpacity>
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
    backgroundColor: '#2B5676',
    alignItems: 'center',
    paddingLeft: 10,
    marginLeft: 20,
    margin: 6,
    borderRadius: 10,
    borderColor: "#2B5676",
    borderWidth: 1,
    width: 350,
    height: 72
  },
  hospImage: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  directionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#092B43",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  directionIcon: {
    marginRight: 5,
  },
  direcText: {
    fontSize: 12,
    fontWeight: "600",
    color: 'white',
  }
});

export default HospitalScreen;
