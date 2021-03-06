/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { View, Text } from 'react-native';
import AppContainer from './app/config/routes/RouteTabNavigator';

import { Provider } from 'react-redux';
import store from './app/redux/store';

//export default AppContainer;
//<View style={{backgroundColor:'white', flex: 1, marginTop: 50}}><Text>Khoa</Text></View>
export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
          <AppContainer />
      </Provider>
      
    );
  }
}


