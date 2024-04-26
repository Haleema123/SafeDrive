import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([]);

  // Simulated data for demonstration
  const dummyNotifications = [
    { id: '1', title: 'Notification 1', body: 'This is the first notification.' },
    { id: '2', title: 'Notification 2', body: 'This is the second notification.' },
    { id: '3', title: 'Notification 3', body: 'This is the third notification.' },
  ];

  useEffect(() => {
    // You can replace this with actual logic to fetch notifications
    setNotifications(dummyNotifications);
  }, []);

  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationBody}>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        style={styles.notificationList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  notificationList: {
    width: '100%',
  },
  notificationContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor:'#183E5A'
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'white'
  },
  notificationBody: {
    fontSize: 14,
    color:'white'
  },
});

export default NotificationScreen;
