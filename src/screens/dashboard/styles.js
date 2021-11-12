import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../utils/scaling';
import colors from '../../themes/colors';

const {black, validation_color} = colors;

export default StyleSheet.create({
  titleStyle: {
    color: black,
    fontSize: moderateScale(24),
    marginTop: verticalScale(20),
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(20),
    marginVertical: verticalScale(15),
  },
  currencyIcon: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
  },
  tileVerticalStyle: {
    marginVertical: verticalScale(15),
  },
  validationStyle: {
    color: validation_color,
    fontSize: moderateScale(12),
    marginVertical: verticalScale(5),
  }
});
