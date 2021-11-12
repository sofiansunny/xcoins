import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const {container, buttonText, disabledStyle, disabledText} = styles;

const ButtonView = ({onPress, title, isDisabled}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[container, isDisabled ? disabledStyle : {}]}
    activeOpacity={0.7}>
    <Text style={[buttonText, isDisabled ? disabledText : {}]}>{title}</Text>
  </TouchableOpacity>
);

ButtonView.defaultProps = {
  onPress: () => {},
  title: '',
  isDisabled: false,
};

export default ButtonView;
