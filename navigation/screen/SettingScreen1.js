import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

class SettingScreen1 extends Component {
    static navigationOptions = {
        title: 'Welcome Setting Screen 1',
        tabBarLabel: 'SettingScreen1',
    };
    
    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => navigate('HomeScreen1')}
                    style={[styles.button, {backgroundColor: '#057a72'}]}>
                    <Text style={styles.buttonText}> Go To Home Screen 1</Text>
                </TouchableHighlight>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 26,
        height: 26,
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 5,
        height: 40,
        backgroundColor: '#7567B1',
        justifyContent: 'center'
      },
      buttonText: {
          color: 'white',
          alignSelf: 'center',
          fontSize: 16
    }
});

export default SettingScreen1;
