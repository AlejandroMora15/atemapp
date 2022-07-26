import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider } from 'react-native-paper';
import { StackRoute } from './src/routes/StackRoute.js';
import { NativeBaseProvider } from 'native-base';

export const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <PaperProvider>
          <StackRoute />
        </PaperProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
