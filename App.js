import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import  Colors from './constants/Colors';
import { HomeScreen } from './src/screens';


EStyleSheet.create(Colors);


export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  render(){
    
      return (
        <HomeScreen />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});