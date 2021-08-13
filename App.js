import React, {useState} from 'react';
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  NativeModules,
  Text,
  Share,
} from 'react-native';

const {SharedPrefModule, TrackingModule} = NativeModules;

const sharedPrefText = SharedPrefModule.getFromSharedPref('KEY_TEXT');

console.log(`Device ID: ${sharedPrefText}`);

export default App = () => {
  const [text, setText] = useState('');
  const [frequency, setFrequency] = useState('');
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.text}>DEVICE ID</Text>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={text => {
            setText(text);
          }}
        />
        <Text style={styles.text}>FREQUENCY</Text>
        <TextInput
          style={styles.input}
          value={frequency}
          onChangeText={text => {
            setFrequency(text);
          }}
        />
        <Button
          title="Save me!"
          style={styles.button}
          onPress={() => {
            setText('');
            setFrequency('');
            console.log(text);
            console.log(frequency);
            SharedPrefModule.saveToSharedPref('id', text);
            SharedPrefModule.saveToSharedPref('interval', frequency);
          }}
        />
        <Button
          style={styles.button}
          title="Start service"
          onPress={() => {
            TrackingModule.startService();
          }}
        />
        <Button
          style={styles.button}
          title="Stop service"
          onPress={() => {
            TrackingModule.stopService();
          }}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    height: 40,
    width: 300,
    textAlign: 'center',
  },
  button: {
    margin: 10,
  },
});
