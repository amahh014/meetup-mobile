import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#384259',
      justifyContent: 'center',
    },
    topContainer: {
        flex: 1,
        alignItems: 'center', //move to middle
        justifyContent: 'center',//move 
        backgroundColor: 'red',
    },
    bottomContainer:{
        flex:0.8,
        backgroundColor: 'blue',
    }
  });

export default styles;