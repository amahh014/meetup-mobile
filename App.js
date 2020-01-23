import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import  Colors from './constants/Colors';
// import { HomeScreen } from './src/screens';
import Root from './src/Root';
import { createAppContainer } from 'react-navigation';

EStyleSheet.create(Colors);


const App = createAppContainer(Root)
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});