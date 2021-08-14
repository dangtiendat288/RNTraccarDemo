import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

export default ModalTextInput = ({
  onTextChange,
  visible,
  value,
  onSubmit,
  onCancel,
  title,
}) => {
  return (
    <View>
      <View style={styles.textInputWrapper}>
        <TextInput
          value={value}
          onChangeText={onTextChange}
          placeholder={'Enter text'}
          style={styles.textInput}
        />
      </View>
      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <TouchableOpacity onPress={onCancel}>
          <Text style={styles.buttonStyle}>CANCEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSubmit}>
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
