import Expo from 'expo';
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import ProfileScreen1 from '../screen/ProfileScreen1';
import ProfileScreen2 from '../screen/ProfileScreen2';

const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: '#05567A',
    },
    headerTintColor: '#fff',
  };  

const Profile1Stack = StackNavigator(
    {
      ProfileScreen1: { screen: ProfileScreen1 },
    },
    {
      headerMode: 'screen',
      navigationOptions: ({ navigation }) => ( {
        ...defaultNavigationOptions,
        title: 'Profile Screen 1',
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            type="entypo"
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        ),
      }),
    }
  );

const Profile2Stack = StackNavigator(
    {
      ProfileScreen2: { screen: ProfileScreen2 },
    },
    {
      headerMode: 'screen',
      navigationOptions: {
        ...defaultNavigationOptions,
      },
    }
  );  

const ProfileDrawer = TabNavigator(
    { //Route Configure
        Profile1Tab: {
            screen: Profile1Stack,
            path: '/profile1',
            navigationOptions: {
                tabBarLabel: 'Profile Tab 1',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon
                      name={focused ? 'emoji-happy' : 'emoji-neutral'}
                      size={25} 
                      type="entypo" 
                      color={tintColor}
                    />
                  ),                          
            }
        },
        Profile2Tab: {
            screen: Profile2Stack,
            path: '/Profile2',
            navigationOptions:{
                tabBarLabel: 'Profile Tab 2',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon 
                      name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
                      size={25} 
                      type="material-community"
                      color={tintColor} /> 
                ),
            }
        },
    },
    {  //TabNavigatorConfig
        initialRouteName: 'Profile1Tab',
        animationEnabled: false,
        swipeEnabled: false,
        tabBarPosition:'bottom',
        tabBarOptions: {
          showIcon: true,
          labelStyle: { fontSize: 10},
          style: {
            backgroundColor: '#05607a', 
            height: 55,
          },
          inactiveTintColor: '#888',
          activeTintColor: '#e91e1e',
        },
    }    
);

ProfileDrawer.navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
        <Icon
          name="emoji-happy"
          size={25}
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          type="entypo"
          color={tintColor}
        />
      ),    
};

export default ProfileDrawer;