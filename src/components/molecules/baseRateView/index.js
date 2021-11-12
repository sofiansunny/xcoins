import React from 'react';
import {View} from 'react-native';
import {CustomText, ImageView} from '../../atoms';
import styles from './styles';
import {TRANSFER_ARROW} from '../../../assets';

const {
  conversionRateStyle,
  conversionRateValueStyle,
  conversionRateContainer,
  transferIcon,
} = styles;

const BaseRateView = ({
  fromCurrencySymbol,
  toCurrencySymbol,
  conversionRate,
}) => {
  return (
    <View style={conversionRateContainer}>
      <CustomText style={conversionRateStyle} textType="regular">
        {`1 ${fromCurrencySymbol}`}
      </CustomText>
      <ImageView sourceIcon={TRANSFER_ARROW} style={transferIcon} />
      <CustomText style={conversionRateValueStyle} textType="regular">
        {`${conversionRate} ${toCurrencySymbol}`}
      </CustomText>
    </View>
  );
};

BaseRateView.defaultProps = {
  fromCurrencySymbol: '',
  toCurrencySymbol: '',
  conversionRate: 1,
};

export default BaseRateView;
