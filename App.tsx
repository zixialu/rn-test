import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import { AppNavigator } from './components/TabNavigator';


export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <AppNavigator />
    </ApplicationProvider>
  );
}
