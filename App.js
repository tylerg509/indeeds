import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import AuthScreen from './screens/AuthScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer} from 'react-navigation'
import MapScreen from './screens/MapScreen'
import DeckScreen from './screens/DeckScreen'
import SettingsScreen from './screens/SettingsScreen'
import ReviewScreen from './screens/ReviewScreen'

const MainNavigator = createBottomTabNavigator({
  welcome: {screen: WelcomeScreen},
  auth: {screen: AuthScreen},
  main: {
    screen: createBottomTabNavigator({
      map: {screen: MapScreen},
      deck: {screen: DeckScreen},
      review: {
        screen: createStackNavigator({
          review: {screen: ReviewScreen},
          settings: {screen: SettingsScreen}
        })
      }
    })
  }
})

class App extends React.Component {
  render(){

    
    return (
      <View style={styles.container}>
        <MainNavigator/>
      </View>
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


export default createAppContainer(MainNavigator);