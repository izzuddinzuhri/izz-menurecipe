import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Western from './screens/Western';
import Video from './screens/Video';
import Malay from './screens/Malay';


// class App extends React.Component  {
//   render () {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }
// }

export default createBottomTabNavigator({
  Home: {
     screen: Home,
     navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Western: {
     screen: Western,
     
    navigationOptions: {
      tabBarLabel: 'western',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-jet" color={tintColor} size={24} />
      )
    }
  },
  Video: {
     screen: Video,
     navigationOptions: {
      tabBarLabel: 'Video',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-film" color={tintColor} size={24} />
      )
    }
    
  },
  Malay: {
     screen: Malay,
     navigationOptions: {
      tabBarLabel: 'Malay',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      )
    }
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
