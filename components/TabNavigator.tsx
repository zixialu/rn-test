import React from 'react';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { TabBar, Tab } from '@ui-kitten/components';
import HelloWorld from './HelloWorld';
import Storybook from '../storybook';

const TabBarComponent = ({ navigation }) => {
  const onSelect = (index) => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <TabBar selectedIndex={navigation.state.index} onSelect={onSelect}>
        <Tab title="App" />
        <Tab title="Storybook" />
      </TabBar>
    </SafeAreaView>
  )
}

const AppView = () => (
  <HelloWorld />
)

const StorybookView = () => (
  <Storybook />
)

const TabNavigator = createMaterialTopTabNavigator({
  App: AppView,
  Storybook: StorybookView,
}, {
  tabBarComponent: TabBarComponent,
});

export const AppNavigator = createAppContainer(TabNavigator);
