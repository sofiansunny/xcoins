import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {CustomText, DropdownView} from '../../atoms';

const {container} = styles;

const WalletCard = ({
  titleText,
  isOpen,
  items,
  selectedValue,
  setOpenCallback,
  setDropdownValueCallback,
  titleTextStyle
}) => {
  return (
    <View style={container}>
      <CustomText style={titleTextStyle} textType="regular">
        {`${titleText}`}
      </CustomText>
      {/* <DropdownView
        items={items}
        selectedValue={selectedValue}
        isOpen={isOpen}
        setOpenCallback={setOpenCallback}
        setDropdownValueCallback={setDropdownValueCallback}
      /> */}
    </View>
  );
};

WalletCard.defaultProps = {
  titleTextStyle: {},
  titleText: '',
  isOpen: false,
};

export default WalletCard;
