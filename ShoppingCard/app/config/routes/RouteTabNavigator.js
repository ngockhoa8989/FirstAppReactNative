import React from 'react';
import {createStackNavigator, createBottomTabNavigator, createAppContainer,createDrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Authentication from '../../components/Authentication/Authentication';
import Me from '../../components/Me';
import Feed from '../../components/Feed';
import UserDetail from '../../components/UserDetail';
import Settings from '../../components/Settings';
import Contact from '../../components/Contact/Contact';
import Search from '../../components/Search/Search';
import LeftMenu from '../../components/LeftMenu';

export const SettingsStack = createStackNavigator({
  Me: {
    screen: Me,
    navigationOptions:({navigation})=>( {
      title: 'Me',
      headerLeft:  <Icon  name="menuunfold" type="antdesign" size={25} color='#5f6063'
      onPress={() => {navigation.openDrawer()}}
      iconStyle={{marginLeft:15 }}/>
    }),
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
      navigationOptions:({navigation})=>( {
        title: 'Feed',
        headerLeft:  <Icon  name="menuunfold" type="antdesign" size={25} color='#5f6063'
        onPress={() => {navigation.openDrawer()}}
        iconStyle={{marginLeft:15 }}/>
      }),
    },
    Details: {
      screen: UserDetail,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      }),
    },
    
  });

export const ContactStack = createStackNavigator({
  Contact: {
    screen: Contact,
    navigationOptions:({navigation})=>( {
      title: 'Contact',
      headerLeft:  <Icon  name="menuunfold" type="antdesign" size={25} color='#5f6063'
      onPress={() => {navigation.openDrawer()}}
      iconStyle={{marginLeft:15 }}/>
    }),
  }
});

export const SearchStack = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions:({navigation})=>( {
      title: 'Search',
      headerLeft:  <Icon  name="menuunfold" type="antdesign" size={25} color='#5f6063'
      onPress={() => {navigation.openDrawer()}}
      iconStyle={{marginLeft:15 }}/>
    }),
  }
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
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => <Icon name="search" size={35} color={tintColor} />
      },
    },
    Contact: {
      screen: ContactStack,
      navigationOptions: {
        tabBarLabel: 'Contact',
        tabBarIcon: ({ tintColor }) => <Icon name="place" size={35} color={tintColor} />
      },
    },
  });

  export const Root = createDrawerNavigator({
    Login:{
      screen:Authentication,
    },
    Tabs:{
      screen:Tabs,
    },
  },
    {
      drawerWidth:300,
      drawerPosition:'left',
      contentComponent: props=> <LeftMenu {...props}/>
    }
  );
  
  // export const Root = createStackNavigator({
  
  //   Tabs: {
  //     screen: Tabs,
  //   },
   
  // }, {
  //   mode: 'modal',
  //   headerMode: 'none',
  // });
  const AppContainer = createAppContainer(Root);

  // Now AppContainer is the main component for React to render
  export default AppContainer;