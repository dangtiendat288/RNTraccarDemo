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

import ModalInput from './ModalInput';

const {SharedPrefModule, TrackingModule} = NativeModules;

const sharedPrefText = SharedPrefModule.getFromSharedPref('KEY_TEXT');

export default TrackingConfig = () => {
  const [text, setText] = useState('');
  const [frequency, setFrequency] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, onTextChange] = useState('');
  const [modalTitle, setModalTitle] = useState('');

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
        onPress={() => {
          setModalTitle('Device Identifier');
          setModalVisible(true);
        }}
      />
      <ConfigItem
        title="Server URL"
        subtitle="Tracking server URL"
        onPress={() => {
          setModalTitle('Server URL');
          setModalVisible(true);
        }}
      />
      <ConfigItem
        title="Location accuracy"
        subtitle="Desired location accuracy"
        onPress={() => {
          setModalTitle('Location accuracy');
          setModalVisible(true);
        }}
      />
      <ConfigItem
        title="Frequency"
        subtitle="Reporting interval in seconds"
        onPress={() => {
          setModalTitle('Frequency');
          setModalVisible(true);
        }}
      />
      <ConfigItem
        title="Distance"
        subtitle="Reporting distance in meters"
        onPress={() => {
          setModalTitle('Distance');
          setModalVisible(true);
        }}
      />
      <ConfigItem
        title="Angle"
        subtitle="Reporting angle in degrees"
        onPress={() => {
          setModalTitle('Angle');
          setModalVisible(true);
        }}
      />
      <ConfigItem
        title="Offline buffering"
        subtitle="Buffering on"
        disabled={true}>
        <CheckBox value={true} />
      </ConfigItem>
      <ConfigItem title="Wake lock" subtitle="Wake lock on" disabled={true}>
        <CheckBox value={true} />
      </ConfigItem>
      <ModalInput
        title={modalTitle}
        visible={modalVisible}
        value={modalText}
        onTextChange={onTextChange}
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
