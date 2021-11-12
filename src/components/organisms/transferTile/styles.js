import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';
import colors from '../../../themes/colors';

const {black, white} = colors;

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputTextStyle: {
    backgroundColor: white,
    height: verticalScale(36)
  },
  separatorStyle: {
    marginVertical: verticalScale(10),
  }
});
