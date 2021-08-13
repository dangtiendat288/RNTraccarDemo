import React, {useState} from 'react';
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  NativeModules,
  Text,
  Switch,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import ConfigItem from './ConfigItem';

const {SharedPrefModule, TrackingModule} = NativeModules;

const sharedPrefText = SharedPrefModule.getFromSharedPref('KEY_TEXT');

export default TrackingConfig = () => {
  const [text, setText] = useState('');
  const [frequency, setFrequency] = useState('');

  return (
    <View style={styles.container}>
      <ConfigItem
        title="Service status"
        subtitle="Services stopped"
        disabled={true}>
        <Switch />
      </ConfigItem>
      <ConfigItem
        title="Device Identifier"
        subtitle={Math.floor(Math.random() * 900000) + 100000}
      />
      <ConfigItem title="Server URL" subtitle="Tracking server URL" />
      <ConfigItem
        title="Location accuracy"
        subtitle="Desired location accuracy"
      />
      <ConfigItem title="Frequency" subtitle="Reporting interval in seconds" />
      <ConfigItem title="Distance" subtitle="Reporting distance in meters" />
      <ConfigItem title="Angle" subtitle="Reporting angle in degrees" />
      <ConfigItem
        title="Offline buffering"
        subtitle="Buffering on"
        disabled={true}>
        <CheckBox value={true} />
      </ConfigItem>
      <ConfigItem title="Wake lock" subtitle="Wake lock on" disabled={true}>
        <CheckBox value={true} />
      </ConfigItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 80,
    paddingEnd: 20,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-evenly',
  },
});
