import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import SettingsBar from './components/SettingsBar';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <SettingsBar />
      <HomeScreen />
    </SafeAreaProvider>
  );
}
