import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  NativeModules,
  Switch,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import ConfigItem from './ConfigItem';

import ModalInput from './ModalInput';

const {SharedPrefModule, TrackingModule} = NativeModules;

const sharedPrefText = SharedPrefModule.getFromSharedPref('KEY_TEXT');

export default TrackingConfig = () => {
  const [text, setText] = useState('');
  const [frequency, setFrequency] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const DEVICE_IDENTIFIER = 'Device Identifier';
  const DEVICE_IDENTIFIER_SUB = Math.floor(Math.random() * 900000) + 100000;
  const SERVER_URL = 'Server URL';
  const SERVER_URL_SUB = 'Tracking server URL';
  const LOCATION_ACCURACY = 'Location accuracy';
  const LOCATION_ACCURACY_SUB = 'Desired location accuracy';
  const FREQUENCY = 'Frequency';
  const FREQUENCY_SUB = 'Reporting interval in seconds';
  const DISTANCE = 'Distance';
  const DISTANCE_SUB = 'Reporting distance in meters';
  const ANGLE = 'Angle';
  const ANGLE_SUB = 'Reporting angle in degrees';
  const OFFLINE_BUFFERING = 'Offline buffering';
  const OFFLINE_BUFFERING_SUB = 'Buffering on';
  const WAKE_LOCK = 'Wake lock';
  const WAKE_LOCK_SUB = 'Wake lock on';

  return (
    <View style={styles.container}>
      <ConfigItem
        title="Service status"
        subtitle="Services stopped"
        disabled={true}>
        <Switch />
      </ConfigItem>

      <ConfigItem
        title={DEVICE_IDENTIFIER}
        subtitle={DEVICE_IDENTIFIER_SUB}
        onPress={() => {
          setModalTitle(DEVICE_IDENTIFIER);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={SERVER_URL}
        subtitle={SERVER_URL_SUB}
        onPress={() => {
          setModalTitle(SERVER_URL);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={LOCATION_ACCURACY}
        subtitle={LOCATION_ACCURACY_SUB}
        onPress={() => {
          setModalTitle(LOCATION_ACCURACY);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={FREQUENCY}
        subtitle={FREQUENCY_SUB}
        onPress={() => {
          setModalTitle(FREQUENCY);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={DISTANCE}
        subtitle={DISTANCE_SUB}
        onPress={() => {
          setModalTitle(DISTANCE);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={ANGLE}
        subtitle={ANGLE_SUB}
        onPress={() => {
          setModalTitle(ANGLE);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={OFFLINE_BUFFERING}
        subtitle={OFFLINE_BUFFERING_SUB}
        disabled={true}>
        <CheckBox value={true} />
      </ConfigItem>

      <ConfigItem title={WAKE_LOCK} subtitle={WAKE_LOCK_SUB} disabled={true}>
        <CheckBox value={true} />
      </ConfigItem>

      <ModalInput
        title={modalTitle}
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onSubmit={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 80,
    paddingEnd: 20,
    backgroundColor: '#FAFAFA',
  },
});
