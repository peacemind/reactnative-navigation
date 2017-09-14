import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      //only for android platform because the title over the status bar
      android: {
        marginTop: 24
      }
    })
  },
});
