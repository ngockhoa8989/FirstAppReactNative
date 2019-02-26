import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
<<<<<<< HEAD
import FetchService  from '../../services/FetchService' 
=======
import FetchService  from '../../services/fetchService';
>>>>>>> 538b358c6f7579514673a9d987c3e7c658ef3b04
import { constants } from '../../config/constants';

import SignIn from './SignIn';
import SignUp from './SignUp';

import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';

StatusBar.setHidden(true);

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }
    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }
    
    render() {
        const {
            row1, iconStyle, titleStyle,
            container, controlStyle,
            signInStyle, signUpStyle,
            activeStyle, inactiveStyle
        } = styles;
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? <SignIn /> : <SignUp />;
        return (
            <View style={container}>
                <View style={row1}>
                    <Text style={titleStyle}>AUTHENTICATION FORM</Text>
                </View>
                {mainJSX}
                <View style={controlStyle}>
                    <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                        <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                        <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0087FF',
        padding: 10,
        justifyContent: 'space-between'
    },
    row1: { flexDirection:'row', justifyContent: 'center', alignItems: 'center', marginTop:50 },
    titleStyle: { color: '#FFFFFF', fontFamily: 'Avenir', fontSize: 25 },
    iconStyle: { width: 30, height: 30 },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginBottom: 20
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#0087FF'
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
    
});
