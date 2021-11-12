import {StyleSheet} from 'react-native';
import colors from '../..//../themes/colors';
import {moderateScale, scale} from '../../../utils/scaling';

const {white, red, disabledColor, gray} = colors;

export default StyleSheet.create({
  container: {
    elevation: 8,
    backgroundColor: red,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  disabledStyle: {
    backgroundColor: disabledColor,
  },
  buttonText: {
    fontSize: 18,
    color: white,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  disabledText: {
    color: gray,
  },
});
