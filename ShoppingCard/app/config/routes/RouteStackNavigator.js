import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../../components/Feed';
import UserDetail from '../../components/UserDetail';
import Settings from '../../components/Settings';
import Tabs from './RouteTabNavigator';

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

  export const SettingsStack = createStackNavigator({
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
      },
    },
  });

//   export const Root = createStackNavigator({
//     Tabs: {
//       screen: Tabs,
//     },
//     Settings: {
//       screen: SettingsStack,
//     },
//   }, {
//     mode: 'modal',
//     headerMode: 'none',
//   });