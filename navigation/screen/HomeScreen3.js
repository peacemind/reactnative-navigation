import Expo from 'expo';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class HomeScreen3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Stack Screen 3</Text>
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

export default HomeScreen3;
