import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { enableScreens } from 'react-native-screens';
import { NativeEventEmitter, NativeModules, LogBox } from 'react-native';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore the warning if you want to suppress it

// Access the native Voice module
const VoiceModule = NativeModules.Voice;
const voiceEmitter = new NativeEventEmitter(VoiceModule);

// Ensure addListener and removeListeners exist to avoid warnings
if (!VoiceModule.addListener) {
  VoiceModule.addListener = () => {}; // No-op if the method is missing
}

if (!VoiceModule.removeListeners) {
  VoiceModule.removeListeners = () => {}; // No-op if the method is missing
}

enableScreens();

const App = () => {
  return <AppNavigator />;
};

export default App;
