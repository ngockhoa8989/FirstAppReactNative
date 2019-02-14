import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Authentication from '../../components/Login/Authentication';
import Me from '../../components/Me';
import Feed from '../../components/Feed';
import UserDetail from '../../components/UserDetail';
import Settings from '../../components/Settings';



export const SettingsStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});


export const FeedStack = createStackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: {
        title: 'Feed',
      },
    },
    Details: {
      screen: UserDetail,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      }),
    },
    
  });



export const Tabs = createBottomTabNavigator({
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        tabBarLabel: 'Feed',
        tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
      },
    },
    Me: {
      screen: SettingsStack,
      navigationOptions: {
        tabBarLabel: 'Me',
        tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  });

  export const Root = createStackNavigator({
    Login: {
      screen: Authentication
    },
    Tabs: {
      screen: Tabs,
    },
   
  }, {
    mode: 'modal',
    headerMode: 'none',
  });
  const AppContainer = createAppContainer(Root);

  // Now AppContainer is the main component for React to render
  export default AppContainer;