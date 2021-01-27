import 'react-native-gesture-handler';
import React from 'react';

import './config';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from '@navigations/root-navigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </>  
  );
};

export default App;
