import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomText, ButtonView} from '../../components/atoms';
import {TransferTile} from '../../components/organisms';
import {BaseRateView} from '../../components/molecules';
import commonStyles from '../../styles';
import styles from './styles';
import {en} from '../../18n';
import {USD_ICON, GBP_ICON, EURO_ICON} from '../../assets';
import {LATEST_EXCHANGE_RATES} from '../../utils/constants';
import {getLatestExchangeRatesAction} from '../../redux/actions';

const {root_container} = commonStyles;
const {titleStyle, currencyIcon, tileVerticalStyle, validationStyle} = styles;

const walletData = [
  {
    label: 'US Dollar',
    value: 'USD',
    symbol: '$',
    balance: 200,
    icon: () => <Image source={USD_ICON} style={currencyIcon} />,
  },
  {
    label: 'British Pound',
    value: 'GBP',
    symbol: '£',
    balance: 10,
    icon: () => <Image source={GBP_ICON} style={currencyIcon} />,
  },
  {
    label: 'Euro',
    value: 'EUR',
    symbol: '€',
    balance: 150,
    icon: () => <Image source={EURO_ICON} style={currencyIcon} />,
  },
];

const findSelectedItem = selectedValue => {
  return walletData.find(element => element.value == selectedValue);
};
let isEnableBtn = true;
const renderValidationMsg = (amount, balance, origin, isFromInputFocused) => {
  isEnableBtn = Number(amount) <= balance || isFromInputFocused !== origin;

  return (
    <CustomText style={validationStyle} textType="regular">
      {isEnableBtn ? '' : en.insufficient_balance}
    </CustomText>
  );
};

const conversionRateCalc = (toRate, fromRate) => {
  return ((toRate / fromRate) * 1).toFixed(2);
};

const DashboardScreen = () => {
  const [myWallets, setMyWallets] = useState(walletData);
  const [selectedFromWalletVal, setSelectedFromWalletVal] = useState('USD');
  const [selectedToWalletVal, setSelectedToWalletVal] = useState('EUR');
  const [selectedFromWallet, setSelectedFromWallet] = useState(myWallets[0]);
  const [selectedToWallet, setSelectedToWallet] = useState(myWallets[2]);
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [fromTransferAmount, setFromTransferAmount] = useState('');
  const [toTransferAmount, setToTransferAmount] = useState('');
  const [conversionRate, setConversionRate] = useState(1);
  const [isFromInputFocused, setFocusedInput] = useState(1);

  const dispatch = useDispatch();
  const exchangeRates = useSelector(
    state => state.exchangeRateReducer.latestCurrencyRates,
  );

  useEffect(() => {
    const payload = {
      apiUrl: LATEST_EXCHANGE_RATES,
    };
    dispatch(getLatestExchangeRatesAction(payload));
  }, []);

  useEffect(() => {
    setSelectedFromWallet(findSelectedItem(selectedFromWalletVal));
  }, [selectedFromWalletVal]);

  useEffect(() => {
    setSelectedToWallet(findSelectedItem(selectedToWalletVal));
  }, [selectedToWalletVal]);

  useEffect(() => {
    const rates = exchangeRates?.rates || null;
    if (rates) {
      setConversionRate(
        conversionRateCalc(
          exchangeRates.rates[selectedToWalletVal],
          exchangeRates.rates[selectedFromWalletVal],
        ),
      );
    }
    setFromTransferAmount('');
    setToTransferAmount('');
  }, [selectedToWalletVal, selectedFromWalletVal, exchangeRates]);

  const onChangeTextInput = ({name, value}) => {
    if (name === en.from) {
      setFromTransferAmount(value);
      setToTransferAmount(value ? (value * conversionRate).toFixed(2) : '');
      setFocusedInput(name);
    } else if (name === en.to) {
      setToTransferAmount(value);
      setFromTransferAmount(
        value ? (value * (1 / conversionRate)).toFixed(2) : '',
      );
      setFocusedInput(name);
    }
  };

  const buttonStatus = () => {
    debugger;
    if (isFromInputFocused == en.from) {
      return Number(fromTransferAmount) > Number(selectedFromWallet.balance);
    } else if (isFromInputFocused == en.to) {     
      return Number(toTransferAmount) > Number(selectedToWallet.balance);
    }
    return false;
  };

  const onPressExchangeBtn = () => {
    const fromObjectIndex = myWallets.findIndex(
      element => element.value == selectedFromWalletVal,
    );
    myWallets[fromObjectIndex].balance = (
      Number(myWallets[fromObjectIndex].balance) - Number(fromTransferAmount)
    ).toFixed(2);

    const toObjectIndex = myWallets.findIndex(
      element => element.value == selectedToWalletVal,
    );
    myWallets[toObjectIndex].balance = (
      Number(myWallets[toObjectIndex].balance) + Number(toTransferAmount)
    ).toFixed(2);

    setMyWallets([...myWallets]);
    setSelectedFromWallet(myWallets[fromObjectIndex]);
    setSelectedToWallet(myWallets[toObjectIndex]);
  };

  return (
    <View style={root_container}>
      <SafeAreaView>
        <CustomText style={titleStyle} textType="bold">
          {en.xcoin_wallet}
        </CustomText>
        <View style={tileVerticalStyle}>
          <TransferTile
            title={en.from}
            items={myWallets}
            selectedValue={selectedFromWallet.value}
            isOpen={openFrom}
            sendReceiveTitle={en.you_send}
            setOpenCallback={setOpenFrom}
            walletBalance={selectedFromWallet.balance}
            selectedCurrencySymbol={selectedFromWallet.symbol}
            onChangeTextCallBack={onChangeTextInput}
            setDropdownValueCallback={setSelectedFromWalletVal}
            inputTextValue={fromTransferAmount}
          />
          {renderValidationMsg(
            fromTransferAmount,
            selectedFromWallet.balance,
            en.from,
            isFromInputFocused,
          )}
        </View>
        <BaseRateView
          fromCurrencySymbol={selectedFromWallet.symbol}
          toCurrencySymbol={selectedToWallet.symbol}
          conversionRate={conversionRate}
        />
        <View style={tileVerticalStyle}>
          <TransferTile
            title={en.to}
            items={myWallets}
            selectedValue={selectedToWallet.value}
            isOpen={openTo}
            sendReceiveTitle={en.you_receive}
            setOpenCallback={setOpenTo}
            walletBalance={selectedToWallet.balance}
            selectedCurrencySymbol={selectedToWallet.symbol}
            onChangeTextCallBack={onChangeTextInput}
            setDropdownValueCallback={setSelectedToWalletVal}
            inputTextValue={toTransferAmount}
          />
          {renderValidationMsg(
            toTransferAmount,
            selectedToWallet.balance,
            en.to,
            isFromInputFocused,
          )}
        </View>
        <ButtonView
          title={en.exchange}
          onPress={onPressExchangeBtn}
          isDisabled={buttonStatus()}
        />
      </SafeAreaView>
    </View>
  );
};

export default DashboardScreen;
