import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { FetchService } from '../../services/FetchService' 
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
    LOGIN = () => {
        var data = "grant_type=password&username=admin&password=admin@123&client_id=ScoreCard.WebMobile";
        FetchService.postData(constants.ServiceUrl + "oauth/token", data)
        .then(info => console.log(info))
        .catch(err =>  console.log(err));
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
                    <TouchableOpacity 
                            style={{backgroundColor:'#FF0000', height: 40, width: 200, justifyContent:'center', alignItems:'center'}} 
                            onPress={()=>{this.LOGIN()}}>
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

