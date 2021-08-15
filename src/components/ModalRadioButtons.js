import React, {useState} from 'react';
import RadioGroup, {RadioButton} from 'react-native-radio-buttons-group';
import {View, Text, TouchableOpacity} from 'react-native';

const radioButtonsData = [
  {
    id: '1',
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

export default ModalRadioButtons = ({onSubmit, onCancel}) => {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  //   const onPressRadioButton = radioButtonsArray => {
  //     setRadioButtons(radioButtonsArray);
  //     };
  const onPressRadioButton = id => {
    console.log(id);
    for (const button of radioButtons) {
      if (button.selected && button.id === id) return;
      button.selected = button.id === id;
    }
    setRadioButtons([...radioButtons]);

    onSubmit(id);
    // setRadioButtons(radioButtonsArray);
  };

  return (
    <View style={{alignItems: 'flex-start', marginTop: 10}}>
      {radioButtons.map(button => (
        <RadioButton
          {...button}
          key={button.id}
          onPress={onPressRadioButton}
          color="#388E3D"
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
