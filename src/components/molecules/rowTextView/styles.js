import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';
import colors from '../../../themes/colors';

const {black, mako} = colors;

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subContainer: {
    width: '55%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountStyle: {
    color: black,
    fontSize: moderateScale(20),
  }
});
