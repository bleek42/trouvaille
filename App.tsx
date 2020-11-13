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
import { NativeRouter } from 'react-router-native';

import Header from './src/components/Header';
import Navbar from './src/components/Navbar';
import Register from './src/components/Register';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <NativeRouter>
      <SafeAreaView>
        <View>
          <Header />
        </View>
        <Navbar />
        <Register />
      </SafeAreaView>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({});

export default App;
