import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Tile, ListItem, Button, Card } from 'react-native-elements';
import { me } from '../config/data';
import {styles} from '../stylesheet/styles';


export default class Me extends Component {
    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings');
    };
        
    render() {
        return (
            <ScrollView>
                <Tile
                    imageSrc={{ uri: this.props.picture.large}}
                    featured
                    title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
                    caption={this.props.email}
                />

                <Button
                    title="Settings"
                    buttonStyle={{ marginTop: 20, marginLeft:20, marginRight:20 }}
                    onPress={() => this.handleSettingsPress()}
                />

                <Button
                    title="Left Menu"
                    buttonStyle={{ marginTop: 20, marginLeft:20, marginRight:20 }}
                    onPress={() => {this.props.navigation.openDrawer();
                    console.log('pressed');
                }}
                />
                <ListItem
                    title="Email"
                    rightTitleStyle={styles.leftText}
                    rightTitle={this.props.email}
                    hideChevron
                    bottomDivider
                />
                <ListItem
                    title="Phone"
                    rightTitleStyle={styles.leftText}
                    rightTitle={this.props.phone}
                    hideChevron
                    bottomDivider
                />

                <ListItem
                    title="Username"
                    rightTitleStyle={styles.leftText}
                    rightTitle={this.props.login.username}
                    hideChevron
                    bottomDivider
                />

                <ListItem
                    title="Birthday"
                    rightTitleStyle={styles.leftText}
                    rightTitle={this.props.dob}
                    hideChevron
                    bottomDivider
                />
                <ListItem
                    title="City"
                    rightTitleStyle={styles.leftText}
                    rightTitle={this.props.location.city}
                    hideChevron
                    bottomDivider
                />

            </ScrollView>

        );
    }
}

Me.defaultProps = { ...me };
