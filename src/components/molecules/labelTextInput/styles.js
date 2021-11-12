import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';

const {black, mako} = colors;

export default StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 0,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
