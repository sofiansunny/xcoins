import React from 'react';
import styles from './styles';
import commonStyles from '../../../styles';
import {LabelTextInput, WalletCard} from '../../molecules';
import {Separator, CardView} from '../../atoms';
import {en} from '../../../18n';

const {container, inputTextStyle, separatorStyle} = styles;
const {subTitleStyle} = commonStyles;
const TransferTile = ({
  items,
  isOpen,
  setOpenCallback,
  selectedValue,
  setDropdownValueCallback,
  onChangeTextCallBack,
  title,
  sendReceiveTitle,
  walletBalance,
  selectedCurrencySymbol,
  inputTextValue,
}) => {
  return (
    <CardView style={container}>
      <WalletCard
        titleText={title}
        titleTextStyle={subTitleStyle}
        items={items}
        selectedValue={selectedValue}
        isOpen={isOpen}
        setOpenCallback={setOpenCallback}
        setDropdownValueCallback={setDropdownValueCallback}
      />
      <Separator style={separatorStyle} />
      <LabelTextInput
        titleText={sendReceiveTitle}
        subTitle={en.balance}
        value={walletBalance}
        currency={selectedCurrencySymbol}
        titleTextStyle={subTitleStyle}
        inputTextStyle={inputTextStyle}
        onChangeTextValue={onChangeTextCallBack}
        textInputId={title}
        inputTextValue={inputTextValue}
      />
    </CardView>
  );
};

TransferTile.defaultProps = {
  items: [],
  isOpen: false,
  setOpenCallback: () => {},
  selectedValue: {},
  setDropdownValueCallback: () => {},
  onChangeTextCallBack: () => {},
  title: '',
  sendReceiveTitle: '',
  walletBalance: '',
  selectedCurrencySymbol: '',
  inputTextValue: '',
};

export default TransferTile;
