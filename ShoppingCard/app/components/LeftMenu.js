
import React, { Component } from 'react';
import { ScrollView,View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class LeftMenu extends Component {
    onLearnMore = (user) => {
        this.props.navigation.navigate('Details', { ...user });
    };

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