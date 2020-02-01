import { HomeScreen, NotificationsScreen, ProfileScreen } from './screens'
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default  Root = createBottomTabNavigator({
    Home: HomeScreen ,
    Notifications: NotificationsScreen,
    Profile: ProfileScreen
},{
    initialRouteName:'Home',
    activeTintColor: 'orange',
    swipeEnabled: false,
    tabBarOptions:{
        showLabel: false
    }
}
);
