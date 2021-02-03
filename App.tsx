/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './src/components/Header';
import Navbar from './src/components/Navbar';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <Navbar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
