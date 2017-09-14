import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ProfileScreen2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen 2</Text>
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
});

export default ProfileScreen2;