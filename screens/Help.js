import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const faqs = [
  {
    question: 'What is SafeDrive?',
    answer: 'SafeDrive is an advanced safety system designed to reduce road accidents. It acts as a surveillance agent for drivers, monitoring them in real-time using camera when they are in driving mode.'
  },
  {
    question: 'How does SafeDrive work?',
    answer: 'When SafeDrive connects to the vehicle’s cameras, monitoring the driver. It alerts drowsy drivers, assesses accidents, and notifies hospitals if severe injuries occur. Accident videos are saved for legal use.'
  },
  {
    question: 'How do I activate SafeDrive?',
    answer: 'To activate SafeDrive, you need to register and provide your primary health and personal information.'
  },
  {
    question: 'Is SafeDrive easy to use?',
    answer: 'Yes, SafeDrive is user-friendly, designed for both technical and non-technical drivers with an intuitive interface.'
  },
  {
    question: 'How does SafeDrive handle accidents?',
    answer: 'In the event of an accident, SafeDrive assesses the severity by evaluating the driver’s condition. If the driver is extremely injured, the system automatically notifies hospitals and ambulances about the accident location.'
  },
  {
    question: 'Is the recorded accident video used for legal purposes?',
    answer: 'Yes, SafeDrive saves the video of accidents for legal use. These recordings can be used for insurance claims and legal investigations, providing an accurate account of the incident.'
  },
];


const HelpPageScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>FAQ</Text>
      <ScrollView>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqContainer}>
            <TouchableOpacity style={styles.faqHeader} onPress={() => toggleFAQ(index)}>
              <AntDesign
                name={expandedIndex === index ? 'up' : 'down'}
                size={18}
                color="black"
              />
              <Text style={styles.questionText}>{faq.question}</Text>
            </TouchableOpacity>
            {expandedIndex === index && <Text style={styles.answerText}>{faq.answer}</Text>}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  text: {
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  faqContainer: {
    flexDirection: 'column',
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
  },
  faqHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  questionText: {
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 8,
  },
  answerText: {
    fontSize: 14,
    marginTop: 8,
    marginBottom:8
  },
});

export default HelpPageScreen;
