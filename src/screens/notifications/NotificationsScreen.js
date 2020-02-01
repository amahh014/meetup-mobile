import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons'


class NotificationsScreen extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
        <Icon name="notifications-active" size={25}/> 
      )
}
    render() {
      return (
        <View style={{ flex: 1 }}>
          <Text>Notifications</Text>
        </View>
      );
    }
  }
  
  export default NotificationsScreen;