import React from 'react';
import {View,} from 'react-native';
import styles from './styles';

const {container} = styles;

const CardView = ({children, style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;
  return <View style={[container, {...passedStyles}]}>{children}</View>;
};

CardView.defaultProps = {
  children: null,
  style: {},
};

export default CardView;