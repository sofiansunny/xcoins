import React from 'react';
import {Text} from 'react-native';
import styles from './/styles';

const {regular, bold, light} = styles;

const CustomText  = ({
  children,
  style,
  textType,
}) => {
  let textStyle;
  switch (textType) {
    case 'regular':
      textStyle = regular;
      break;
    case 'bold':
      textStyle = bold;
      break;
    case 'light':
      textStyle = light;
      break;
    default:
      textStyle = regular;
      break;
  }
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[textStyle, {...passedStyles}]}>{children}</Text>;
};

CustomText.defaultProps = {
    style: {},
    textType: 'regular' | 'bold' | 'light'
  };

export default CustomText;