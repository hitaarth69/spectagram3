import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';
import LikedPost from '../screens/LikedPosts';
import Settings from '../screens/Settings';
import About from '../screens/About';
import Messages from '../screens/Messages';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="LikedPost" component={LikedPost} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Messages" component={Messages} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
