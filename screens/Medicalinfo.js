import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
const MedicalInfoScreen = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [disease, setDisease] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilePicker = async () => {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setSelectedFile(result);
    }
  };

  const handleSubmit = () => {
    // Handle the submission of user's medical information and the uploaded file
    console.log('bloodGroup:', bloodGroup);
    console.log('disease:', disease);
    console.log('Selected File:', selectedFile);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Medical Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Blood Group"
        value={bloodGroup}
        onChangeText={setBloodGroup}
      />
      <TextInput
        style={styles.input}
        placeholder="Disease"
        value={disease}
        onChangeText={setDisease}
      />
      <TouchableOpacity style={styles.uploadButton} onPress={handleFilePicker}>
        <Text style={styles.uploadText}>Upload File</Text>
      </TouchableOpacity>
      {selectedFile && (
        <View style={styles.selectedFileContainer}>
          <Text style={styles.selectedFileText}>Selected File: {selectedFile.name}</Text>
          <Text style={styles.selectedFileText}>Type: {selectedFile.type}</Text>
          <Text style={styles.selectedFileText}>Size: {selectedFile.size} bytes</Text>
        </View>
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#183E5A',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    color: '#183E5A',
  },
  uploadButton: {
    backgroundColor: '#183E5A',
    borderRadius: 15,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  uploadText: {
    color: 'white',
    fontSize: 18,
  },
  selectedFileContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
  },
  selectedFileText: {
    fontSize: 16,
    color: '#183E5A',
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: '#183E5A',
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MedicalInfoScreen;
