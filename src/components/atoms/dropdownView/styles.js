import {StyleSheet} from 'react-native';
import { scale } from '../../../utils/scaling'
import colors from '../../../themes/colors';
const { white } = colors

export default StyleSheet.create({
  container: {
    width: scale(200),
    borderColor: white
},
  contentContainer: {
    backgroundColor: white,
    width: scale(200),
  },

  dropDownContainer: {
    backgroundColor: white,
    borderColor: '#f1f2f4',
  }
});
