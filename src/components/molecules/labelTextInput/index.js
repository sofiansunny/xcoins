import React from 'react';
import {View} from 'react-native';
import {CustomTextInput} from '../../atoms';
import RowTextView from '../rowTextView';
import styles from './styles';

const {container, subContainer} = styles;

const LabelTextInput = ({
  onChangeTextValue,
  titleTextStyle,
  inputTextStyle,
  titleText,
  subTitle,
  value,
  currency,
  textInputId,
  inputTextValue,
}) => {
  return (
    <View style={container}>
      <View style={subContainer}>
        <RowTextView
          titleTextStyle={titleTextStyle}
          title={titleText}
          subTitle={subTitle}
          value={value}
          currency={currency}
        />
      </View>
      <CustomTextInput
        onChangeTextValue={onChangeTextValue}
        style={inputTextStyle}
        placeholderText="0.00"
        name={textInputId}
        inputTextValue={inputTextValue}
      />
    </View>
  );
};

LabelTextInput.defaultProps = {
  onChangeTextValue: () => {},
  titleTextStyle: {},
  inputTextStyle: {},
  titleText: '',
  subTitle: '',
  value: '',
  currency: '',
  textInputId: '',
  inputTextValue: '',
};

export default LabelTextInput;
