// Expo
import { StatusBar } from 'expo-status-bar';

// ReactJS & ReactNative
import { NativeRouter } from 'react-router-native';
import React from 'react';

// Components
import Main from './src/components/Main';

export default function App() {
  return (
    <NativeRouter>
      <StatusBar style="light" />
      <Main />
    </NativeRouter>
  )
}