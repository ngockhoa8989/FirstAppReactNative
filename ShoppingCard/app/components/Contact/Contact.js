import React, { Component } from 'react';
import { View, Text, ListItem, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';


export default class Contact extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
          // error
          console.log(err);
        } else {
          // contacts returned in Array
          console.log(contacts);
        }
      })
        // PermissionsAndroid.request(
        //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        //     {
        //       'title': 'Contacts',
        //       'message': 'This app would like to view your contacts.'
        //     }
        //   ).then(() => {
            
        //   })
    }

    render() {
        return (
            <View>
                <Text>Contact Component</Text>
            </View>
        )
    }
}