import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Tile, ListItem, Card } from 'react-native-elements';
import {styles} from '../stylesheet/styles';

export default class UserDetail extends Component {
    render() {
        const { picture, name, email, phone, login, dob, location } = this.props.navigation.state.params;

        return (
            <ScrollView>
                <Tile
                    imageSrc={{ uri: picture.large }}
                    featured
                    title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
                    caption={email}
                />
                <View style={{marginTop:20}}>
                    <ListItem
                        title="Email"
                        rightTitleStyle={styles.leftText}
                        rightTitle={email}
                        hideChevron
                        bottomDivider
                    />
                    <ListItem
                        title="Phone"
                        rightTitleStyle={styles.leftText}
                        rightTitle={phone}
                        hideChevron
                        bottomDivider
                    />

                    <ListItem
                        title="Username"
                        rightTitleStyle={styles.leftText}
                        rightTitle={login.username}
                        hideChevron
                        bottomDivider
                    />

                    <ListItem
                        title="Birthday"
                        rightTitleStyle={styles.leftText}
                        rightTitle={dob}
                        hideChevron
                        bottomDivider
                    />
                    <ListItem
                        title="City"
                        rightTitleStyle={styles.leftText}
                        rightTitle={location.city}
                        hideChevron
                        bottomDivider
                    />
                </View>
            </ScrollView>
        );
    }
}