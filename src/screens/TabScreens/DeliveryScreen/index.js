import React from 'react';
import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import {styles} from './styles';

function DeliveryScreen(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <TextInput>Test</TextInput>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DeliveryScreen;
