import React from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import ModalTextInput from './ModalTextInput';

export default ModalInput = ({visible, title, onSubmit, onCancel}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      style={{justifyContent: 'center'}}
      animationType="fade"
      onRequestClose={() => {}}>
      <View style={styles.containerStyle}>
        <View style={styles.cardStyle}>
          <Text style={styles.titleStyle}>{title}</Text>
          <ModalTextInput onCancel={onCancel} onSubmit={onSubmit} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    color: '#3B3B3B',
  },
  buttonStyle: {
    marginTop: 27,
    fontSize: 14,
    color: '#4E9A52',
  },
  cardStyle: {
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: 156,
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.60)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
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
