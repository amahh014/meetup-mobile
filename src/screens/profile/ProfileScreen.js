  
import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export default class ProfileScreen extends React.Component{
    static navigationOptions = {
        tabBarIcon: () => (
            <Icon name="user-circle" size={25}/>
          )
    }

    render() {
        return (
            <View style={styles.container}> 
                <Text>Profile</Text>
            </View>
        )
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