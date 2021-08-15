import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default ModalTextInput = ({onSubmit, onCancel, placeholder}) => {
  const [text, onChangeText] = useState('');
  return (
    <View>
      <View style={styles.textInputWrapper}>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.textInput}
        />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.buttonStyle}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSubmit(text)}>
          <Text style={[styles.buttonStyle, {marginStart: 35, marginEnd: 15}]}>
            OK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 27,
    fontSize: 14,
    color: '#4E9A52',
  },

  textInput: {
    fontSize: 18,
    marginBottom: -10,
  },
  textInputWrapper: {
    borderBottomWidth: 1.325,
    borderColor: '#4E9A52',
  },
});
