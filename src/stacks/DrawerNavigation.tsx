import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from 'src/screens/Profile';
import Setting from 'src/screens/Setting';
import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabs} options={{ headerTitle: () => null }} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;
