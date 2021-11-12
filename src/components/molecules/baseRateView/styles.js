import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale, scale} from '../../../utils/scaling';
import colors from '../../../themes/colors';

const {black, mako} = colors;

export default StyleSheet.create({
  conversionRateStyle: {
    color: black,
    fontSize: moderateScale(18),
    textAlign: 'right',
    marginHorizontal: verticalScale(20),
  },
  conversionRateValueStyle: {
    color: black,
    fontSize: moderateScale(18),
    textAlign: 'left',
    marginHorizontal: verticalScale(20),
  },
  conversionRateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transferIcon: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
