import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import {FetchService } from '../../services/FetchService' 
import { constants } from '../../config/constants';
import {styles} from '../../stylesheet/styles'

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            password:"",
            status:"CHUA LOGIN",
            token:"..."
        }
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.box}>
                    <Text>LOGIN FORM</Text>
                </View>
                <View style={styles.box}>
                    <TextInput
                        style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(username) => this.setState({username})}
                        placeholder="Username"
                        value={this.state.un}
                    />
                </View>
                <View style={styles.box}>
                    <TextInput
                        style={{height: 40, width: 250, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={(password) => this.setState({password})}
                        placeholder="Password"
                        value={this.state.pa}
                    />
                </View>
                <View style={styles.box}>
                    <TouchableOpacity onPress={()=>{this.LOGIN()}}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    <Text>{this.state.kq}</Text>
                    <Text>{this.state.token}</Text>
                </View>
          </View>
        );
    }
}

