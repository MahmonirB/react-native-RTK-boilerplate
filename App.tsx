import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/stacks/Tabs';
import { Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}