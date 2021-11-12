import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

const {container, textInputStyle, fill} = styles;

const CustomTextInput = props => {
  const {
    containerStyle,
    style,
    LeftComponent,
    RightComponent,
    placeholderText,
    onChangeTextValue,
    name,
    inputTextValue
  } = props;

  return (
    <View style={[container, containerStyle]}>
      {LeftComponent}
      <TextInput
        onChangeText={(value)=> onChangeTextValue({name, value})}
        placeholder={placeholderText}
        style={[textInputStyle, fill, {...style}]}
        value={`${inputTextValue}`}
      />
      {RightComponent}
    </View>
  );
};

CustomTextInput.defaultProps = {
  style: {},
  containerStyle: {},
  LeftComponent: null,
  RightComponent: null,
  placeholderText: null,
};

export default CustomTextInput;
