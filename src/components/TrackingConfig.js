import React, {useState, useEffect} from 'react';
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

  const SERVICE_TITLE = 'Service status';
  const [serviceSub, setServiceSub] = useState('Services stopped');

  const [deviceIdentifier, setDeviceIdentifier] = useState(
    SharedPrefModule.getFromSharedPref(KEY_DEVICE),
  );

  if (deviceIdentifier == '') {
    const id = Math.floor(Math.random() * 900000) + 100000;
    setDeviceIdentifier(id.toString());
    SharedPrefModule.saveToSharedPref(KEY_DEVICE, id.toString());
  }

  const [serverURL, setServerURL] = useState(
    SharedPrefModule.getFromSharedPref(KEY_URL),
  );

  if (serverURL == '') {
    const URL = 'http://localhost:5055';
    setServerURL(URL);
    SharedPrefModule.saveToSharedPref(KEY_URL, URL);
  }

  useEffect(() => {
    if (!isEnabled) {
      TrackingModule.stopService();
      setServiceSub('Services stopped');
    } else {
      TrackingModule.startService();
      setServiceSub('Services started');
    }
  }, [isEnabled]);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const DEVICE_IDENTIFIER_TITLE = 'Device Identifier';

  const SERVER_URL_TITLE = 'Server URL';
  const SERVER_URL_SUB = 'Tracking server URL';

  const LOCATION_ACCURACY_TITLE = 'Location accuracy';
  const LOCATION_ACCURACY_SUB = 'Desired location accuracy';
  const LOCATION_ACCURACY = SharedPrefModule.getFromSharedPref(KEY_ACCURACY);

  const FREQUENCY_TITLE = 'Frequency';
  const FREQUENCY_SUB = 'Reporting interval in seconds';
  const [frequency, setFrequency] = useState(
    SharedPrefModule.getFromSharedPref(KEY_INTERVAL),
  );

  const DISTANCE_TITLE = 'Distance';
  const DISTANCE_SUB = 'Reporting distance in meters';
  const [distance, setDistance] = useState(
    SharedPrefModule.getFromSharedPref(KEY_DISTANCE),
  );

  const ANGLE_TITLE = 'Angle';
  const ANGLE_SUB = 'Reporting angle in degrees';
  const [angle, setAngle] = useState(
    SharedPrefModule.getFromSharedPref(KEY_ANGLE),
  );

  const OFFLINE_BUFFERING_TITLE = 'Offline buffering';
  const OFFLINE_BUFFERING_SUB = 'Buffering on';
  const OFFLINE_BUFFERING = SharedPrefModule.getFromSharedPref(KEY_BUFFER);

  const WAKE_LOCK_TITLE = 'Wake lock';
  const WAKE_LOCK_SUB = 'Wake lock on';
  const WAKE_LOCK = SharedPrefModule.getFromSharedPref(KEY_WAKELOCK);

  const onRadioSubmit = accuracyId => {
    let accuracy = '';
    switch (accuracyId) {
      case '1':
        accuracy = 'high';
        break;
      case '2':
        accuracy = 'medium';
        break;
      default:
        accuracy = 'low';
    }
    // console.log(`Accuracy Id: ${accuracyId}, accuracy: ${accuracy}`);
    SharedPrefModule.saveToSharedPref(KEY_ACCURACY, accuracy);
    setModalVisible(false);
  };

  const onTextSubmit = string => {
    SharedPrefModule.saveToSharedPref(key, string);
    switch (key) {
      case KEY_DEVICE:
        setDeviceIdentifier(string);
        break;
      case KEY_URL:
        setServerURL(string);
        break;
      // case KEY_DEVICE:
      //   setDeviceIdentifier(string);
      //   break;
      case KEY_INTERVAL:
        setFrequency(string);
        break;
      case KEY_DISTANCE:
        setDistance(string);
        break;
      case KEY_ANGLE:
        setAngle(string);
        break;
      // case KEY_DEVICE:
      //   setDeviceIdentifier(string);
      //   break;
      // case KEY_DEVICE:
      //   setDeviceIdentifier(string);
      //   break;
      default:
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ConfigItem title={SERVICE_TITLE} subtitle={serviceSub} disabled={true}>
        <Switch value={isEnabled} onValueChange={toggleSwitch} />
      </ConfigItem>

      <ConfigItem
        title={DEVICE_IDENTIFIER_TITLE}
        subtitle={deviceIdentifier}
        onPress={() => {
          setPlaceholder(deviceIdentifier);
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
          setPlaceholder(serverURL);
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
          setPlaceholder(frequency);
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
          setPlaceholder(distance);
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
          setPlaceholder(angle);
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
            onSubmit={onTextSubmit}
            onCancel={() => setModalVisible(false)}
          />
        ) : (
          <ModalRadioButtons
            onSubmit={onRadioSubmit}
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
