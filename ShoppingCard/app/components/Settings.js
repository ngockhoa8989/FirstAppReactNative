import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import {styles} from '../stylesheet/styles';

export default class Settings extends Component {
    render() {
        return (
            <ScrollView>
                <ListItem 
                    title="Notifications"                    
                    chevronColor="black"
                    chevron
                />
                <ListItem 
                    title="Profile"
                    chevronColor="black"
                    chevron
                />
                <ListItem 
                    title="Password"
                    chevronColor="black"
                    chevron
                />
                <ListItem
                    title="Sign Out"
                    rightIcon={{ name: 'cancel' }}
                />

            </ScrollView>
        );
    }
}