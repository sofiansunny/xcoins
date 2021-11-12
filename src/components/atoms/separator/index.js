import React from 'react';
import {View,} from 'react-native';
import styles from '../../../styles';

const {separatorStyle} = styles;

const Separator = ({style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return <View style={[separatorStyle, {...passedStyles}]} />
};

Separator.defaultProps = { 
  style: {}
};

export default Separator;