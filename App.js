import React, {useState} from 'react';
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  NativeModules,
  Text,
} from 'react-native';

import TrackingConfig from './src/components/TrackingConfig';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const {SharedPrefModule, TrackingModule} = NativeModules;

const sharedPrefText = SharedPrefModule.getFromSharedPref('KEY_TEXT');

// console.log(`Device ID: ${sharedPrefText}`);

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#44A048',
          },
        }}>
        <Stack.Screen
          name="TrackingConfig"
          component={TrackingConfig}
          options={{
            headerTitle: props => (
              <Text style={{color: '#fff', fontSize: 20}}>Traccar Client</Text>
            ),
            headerRight: () => <Text style={{color: '#fff'}}>STATUS</Text>,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
