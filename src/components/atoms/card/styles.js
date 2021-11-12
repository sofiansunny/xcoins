import {StyleSheet} from 'react-native';
import colors from '../..//../themes/colors';
import {moderateScale, scale} from '../../../utils/scaling';

const {white} = colors;

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    borderColor: '#e4f1f7',
    borderWidth: scale(1)
  },
});