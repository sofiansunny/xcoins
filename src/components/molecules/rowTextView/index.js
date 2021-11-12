import React from 'react';
import {View} from 'react-native';
import {CustomText} from '../../atoms';
import styles from './styles';

const {container, subContainer, amountStyle} = styles;

const RowTextView = ({title, subTitle, value, titleTextStyle, currency}) => {
  return (
    <View style={container}>
      <CustomText style={titleTextStyle} textType="regular">
        {`${title}`}
      </CustomText>
      <View style={subContainer}>
        <CustomText style={titleTextStyle} textType="regular">
          {`${subTitle} (${currency})`}
        </CustomText>
        <CustomText style={amountStyle} textType="regular">
          {value}
        </CustomText>
      </View>
    </View>
  );
};

RowTextView.defaultProps = {
  title: '',
  subTitle: '',
  value: '',
  titleTextStyle: '',
  currency: '',
};

export default RowTextView;
