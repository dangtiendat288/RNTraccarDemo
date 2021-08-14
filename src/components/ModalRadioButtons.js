import React, {useState} from 'react';
import RadioGroup, {RadioButton} from 'react-native-radio-buttons-group';
import {View, Text, TouchableOpacity} from 'react-native';

const radioButtonsData = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'High',
    value: 'High',
  },
  {
    id: '2',
    label: 'Medium',
    value: 'Medium',
  },
  {
    id: '3',
    label: 'Low',
    value: 'Low',
  },
];

export default ModalRadioButtons = ({onCancel}) => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  const onPressRadioButton = radioButtonsArray => {
    setRadioButtons(radioButtonsArray);
  };

  return (
    <View style={{alignItems: 'flex-start', marginTop: 10}}>
      {radioButtonsData.map(button => (
        <RadioButton
          key={button.id}
          onPress={onPressRadioButton}
          color="#388E3D"
          label={button.label}
          labelStyle={{color: 'black', fontSize: 18}}
          size="18"
          borderColor="black"
          containerStyle={{marginBottom: 20}}
        />
      ))}
      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <TouchableOpacity onPress={onCancel}>
          <Text
            style={{
              marginTop: 13,
              fontSize: 14,
              color: '#4E9A52',
            }}>
            CANCEL
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
