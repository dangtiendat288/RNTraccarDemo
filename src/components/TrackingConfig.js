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
import ModalRadioButtons from './ModalRadioButtons';
import ModalTextInput from './ModalTextInput';

const {SharedPrefModule, TrackingModule} = NativeModules;

const sharedPrefText = SharedPrefModule.getFromSharedPref('KEY_TEXT');

const KEY_DEVICE = 'id';
const KEY_URL = 'url';
const KEY_INTERVAL = 'interval';
const KEY_DISTANCE = 'distance';
const KEY_ANGLE = 'angle';
const KEY_ACCURACY = 'accuracy';
const KEY_STATUS = 'status';
const KEY_BUFFER = 'buffer';
const KEY_WAKELOCK = 'wakelock';

export default TrackingConfig = () => {
  // const [frequency, setFrequency] = useState('');

  const [key, setKey] = useState(KEY_DEVICE);
  const [placeholder, setPlaceholder] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [isText, setIsText] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const [serviceSub, setServiceSub] = useState('Services stopped');

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    console.log(isEnabled);
    if (isEnabled) {
      TrackingModule.stopService();
      setServiceSub('Services stopped');
    } else {
      TrackingModule.startService();
      setServiceSub('Services started');
    }
  };

  const DEVICE_IDENTIFIER_TITLE = 'Device Identifier';
  let DEVICE_IDENTIFIER = SharedPrefModule.getFromSharedPref(KEY_DEVICE);

  if (DEVICE_IDENTIFIER == '') {
    const id = Math.floor(Math.random() * 900000) + 100000;
    DEVICE_IDENTIFIER = id.toString();
    SharedPrefModule.saveToSharedPref(KEY_DEVICE, DEVICE_IDENTIFIER);
  }

  let SERVER_URL = SharedPrefModule.getFromSharedPref(KEY_URL);

  if (SERVER_URL == '') {
    const URL = 'http://localhost:5055';
    SERVER_URL = URL;
    SharedPrefModule.saveToSharedPref(KEY_URL, URL);
  }

  const SERVER_URL_TITLE = 'Server URL';
  const SERVER_URL_SUB = 'Tracking server URL';

  const LOCATION_ACCURACY_TITLE = 'Location accuracy';
  const LOCATION_ACCURACY_SUB = 'Desired location accuracy';
  const LOCATION_ACCURACY = SharedPrefModule.getFromSharedPref(KEY_ACCURACY);

  const FREQUENCY_TITLE = 'Frequency';
  const FREQUENCY_SUB = 'Reporting interval in seconds';
  const FREQUENCY = SharedPrefModule.getFromSharedPref(KEY_INTERVAL);

  const DISTANCE_TITLE = 'Distance';
  const DISTANCE_SUB = 'Reporting distance in meters';
  const DISTANCE = SharedPrefModule.getFromSharedPref(KEY_DISTANCE);

  const ANGLE_TITLE = 'Angle';
  const ANGLE_SUB = 'Reporting angle in degrees';
  const ANGLE = SharedPrefModule.getFromSharedPref(KEY_ANGLE);

  const OFFLINE_BUFFERING_TITLE = 'Offline buffering';
  const OFFLINE_BUFFERING_SUB = 'Buffering on';
  const OFFLINE_BUFFERING = SharedPrefModule.getFromSharedPref(KEY_BUFFER);

  const WAKE_LOCK_TITLE = 'Wake lock';
  const WAKE_LOCK_SUB = 'Wake lock on';
  const WAKE_LOCK = SharedPrefModule.getFromSharedPref(KEY_WAKELOCK);

  const SERVICE_TITLE = 'Service status';

  return (
    <View style={styles.container}>
      <ConfigItem title={SERVICE_TITLE} subtitle={serviceSub} disabled={true}>
        <Switch value={isEnabled} onValueChange={toggleSwitch} />
      </ConfigItem>

      <ConfigItem
        title={DEVICE_IDENTIFIER_TITLE}
        subtitle={
          DEVICE_IDENTIFIER
          // DEVICE_IDENTIFIER != null ? DEVICE_IDENTIFIER : DEVICE_IDENTIFIER_SUB
        }
        onPress={() => {
          setPlaceholder(DEVICE_IDENTIFIER);
          setKey(KEY_DEVICE);
          setIsText(true);
          setModalTitle(DEVICE_IDENTIFIER_TITLE);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={SERVER_URL_TITLE}
        subtitle={SERVER_URL_SUB}
        onPress={() => {
          setPlaceholder(SERVER_URL);
          setKey(KEY_URL);
          setIsText(true);
          setModalTitle(SERVER_URL_TITLE);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={LOCATION_ACCURACY_TITLE}
        subtitle={LOCATION_ACCURACY_SUB}
        onPress={() => {
          setPlaceholder(LOCATION_ACCURACY);
          setKey(KEY_ACCURACY);
          setIsText(false);
          setModalTitle(LOCATION_ACCURACY_TITLE);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={FREQUENCY_TITLE}
        subtitle={FREQUENCY_SUB}
        onPress={() => {
          setPlaceholder(FREQUENCY);
          setKey(KEY_INTERVAL);
          setIsText(true);
          setModalTitle(FREQUENCY_TITLE);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={DISTANCE_TITLE}
        subtitle={DISTANCE_SUB}
        onPress={() => {
          setPlaceholder(DISTANCE);
          setKey(KEY_DISTANCE);
          setIsText(true);
          setModalTitle(DISTANCE_TITLE);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={ANGLE_TITLE}
        subtitle={ANGLE_SUB}
        onPress={() => {
          setPlaceholder(ANGLE);
          setKey(KEY_ANGLE);
          setIsText(true);
          setModalTitle(ANGLE_TITLE);
          setModalVisible(true);
        }}
      />

      <ConfigItem
        title={OFFLINE_BUFFERING_TITLE}
        subtitle={OFFLINE_BUFFERING_SUB}
        disabled={true}>
        <CheckBox value={true} />
      </ConfigItem>

      <ConfigItem
        title={WAKE_LOCK_TITLE}
        subtitle={WAKE_LOCK_SUB}
        disabled={true}>
        <CheckBox value={true} />
      </ConfigItem>

      <ModalInput title={modalTitle} visible={modalVisible}>
        {isText ? (
          <ModalTextInput
            placeholder={placeholder}
            onSubmit={string => {
              SharedPrefModule.saveToSharedPref(key, string);
              setModalVisible(false);
            }}
            onCancel={() => setModalVisible(false)}
          />
        ) : (
          <ModalRadioButtons
            onSubmit={id => setModalVisible(false)}
            onCancel={() => setModalVisible(false)}
          />
        )}
      </ModalInput>
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
