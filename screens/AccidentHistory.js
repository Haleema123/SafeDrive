import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AccidentHistoryScreen = () => {
  const [accidents, setAccidents] = useState([
    { id: '1', date: '2023-08-15', videoUri: 'accident_video_1.mp4' },
    { id: '2', date: '2023-08-10', videoUri: 'accident_video_2.mp4' },
    // Add more accident data as needed
  ]);

  const handleDeleteAccident = (id) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this accident?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            const updatedAccidents = accidents.filter(accident => accident.id !== id);
            setAccidents(updatedAccidents);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderAccidentItem = ({ item }) => (
    <View style={styles.accidentItem}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.videoText}>{item.videoUri}</Text>
      <TouchableOpacity onPress={() => handleDeleteAccident(item.id)}>
        <AntDesign name="delete" size={22} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.columnHeader}>Date</Text>
        <Text style={styles.columnHeader}>Video</Text>
        <Text style={styles.columnHeader}>Action</Text>
      </View>
      <FlatList
        data={accidents}
        renderItem={renderAccidentItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#183E5A',
    borderRadius: 10,
  },
  columnHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  accidentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    justifyContent:'space-around'
  },
  dateText: {
    fontSize: 14,
    color:'black'
  },
  videoText: {
    fontSize: 14,
    color: 'black',
  },
});

export default AccidentHistoryScreen;
