import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './source/navigation/Router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
