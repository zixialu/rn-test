import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import { mapping, light as lightTheme, dark as darkTheme } from '@eva-design/eva';
import HelloWorld from './components/HelloWorld';

export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={darkTheme}>
      <HelloWorld />
    </ApplicationProvider>
  );
}
