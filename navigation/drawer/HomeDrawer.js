import Expo from 'expo';
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Iconicons } from '@expo/vector-icons';

import HomeScreen1 from '../screen/HomeScreen1';
import HomeScreen2 from '../screen/HomeScreen2';
import HomeScreen3 from '../screen/HomeScreen3';

const defaultNavigationOptions = {
    headerStyle: {
      backgroundColor: '#05567A',
    },
    headerTintColor: '#fff',
  };  

const Home1Stack = StackNavigator(
    {
      HomeScreen1: { screen: HomeScreen1 },
    },
    { 
      headerMode: 'screen',
      navigationOptions: ({ navigation }) => ( {
        ...defaultNavigationOptions,
        title: 'Home Stack 1',
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

const Home2Stack = StackNavigator(
    {
      HomeScreen2: { screen: HomeScreen2 },
    },
    {
      headerMode: 'screen',
      navigationOptions: {
        ...defaultNavigationOptions,
      },
    }
  );


const Home3Stack = StackNavigator(
    {
      HomeScreen3: { screen: HomeScreen3 },
    },
    {
      headerMode: 'screen',
      navigationOptions: {
        ...defaultNavigationOptions,
      },
    }
  );

//Tab Naviagator Config with Stack Navigator
const HomeDrawer = TabNavigator(
    {  //Route Configure
        Home1Tab: {
            screen: Home1Stack,
            path: '/homescreen1',
            navigationOptions: {
                tabBarLabel: 'Tab 1',
                tabBarIcon: 
                  ({ tintColor, focused }) => (
                    <Icon
                      name={focused ? 'emoji-happy' : 'emoji-neutral'}
                      size={25}
                      type="entypo" 
                      color={tintColor}
                    />
                  ),
                                          
            }
        },
        Home2Tab: {
            screen: Home2Stack,
            path: '/homescreen2',
            navigationOptions:{
                tabBarLabel: 'Tab 2',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon 
                      name={focused ? 'emoticon-cool' : 'emoticon-neutral'}
                      size={25}
                      type="material-community"
                      color={tintColor} /> 
                ),
            }
        },
        Home3Tab: {
            screen: Home3Stack,
            path: '/homescreen3',
            navigationOptions:{
                tabBarLabel: 'Tab 3',
                tabBarIcon: ({ tintColor, focused }) => (
                    <Icon 
                      name={focused ? 'md-happy' : 'md-sad'}
                      size={25}  type="ionicon" color={tintColor} />
                ),
            }
        },
    },
    {  //TabNavigatorConfig
        initialRouteName: 'Home1Tab',
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

HomeDrawer.navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
        <Icon
          name="home"
          size={30}
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          type="material-commnity"
          color={tintColor}
        />
      ),    
};

export default HomeDrawer;