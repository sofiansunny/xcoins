import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import {moderateScale, scale, verticalScale} from '../../../utils/scaling';

const {white, black} = colors;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: white    
  },
  textInputStyle: {
    padding: 0,
    backgroundColor: white,
    fontSize: moderateScale(20),
    color: black
  },
  fill: {
    flex: 1,
  },
});