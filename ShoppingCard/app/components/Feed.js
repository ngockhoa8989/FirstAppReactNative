import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import { users } from '../config/data';


export default class Feed extends Component {
    onLearnMore = (user) => {
        this.props.navigation.navigate('Details', { ...user });
    };

    render() {
        return (
            <ScrollView>
                {
                    users.map((user) => (
                        <ListItem
                        key={user.login.username}
                        roundAvatar
                        leftAvatar={{ source: { uri: user.picture.thumbnail} }}
                        title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                        subtitle={user.email}
                        onPress={() => this.onLearnMore(user)}
                        chevronColor="black"
                        chevron
                        />
                    ))
                }
            </ScrollView>
        );
    }
} 