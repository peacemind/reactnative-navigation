import Expo from 'expo';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import HomeDrawer from './drawer/HomeDrawer';
import ProfileDrawer from './drawer/ProfileDrawer';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#3e4c75' }}>
    <View
      style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image 
        source={require('../images/lotus.jpg')}
        style={{ width: SCREEN_WIDTH * 0.6 }}
        resizeMode="contain"
      />
    </View>
    <DrawerItems {...props} />
  </View>
);

const RootNavigator = DrawerNavigator(
  {  // RouteConfigs
    Home: {
      path: '/homedrawer',
      screen: HomeDrawer,
    },
    Profile: {
      path: '/profile',
      screen: ProfileDrawer,
    }
  },
  {  //DrawerNavigatorConfig
    initialRouteName: 'Home',
    drawerWidth: SCREEN_WIDTH * 0.6,
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: '#54a8f7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
  }
);

export default RootNavigator;
