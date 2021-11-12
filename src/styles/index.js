import {StyleSheet} from 'react-native';
import colors from '../themes/colors';
import {moderateScale, verticalScale} from '../utils/scaling';
const { mako, app_bg, midGray, lightGray } = colors
export default StyleSheet.create({
  root_container: {
    flex: 1,
    backgroundColor: app_bg,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(20),
  },
  separatorStyle: {
    width: '100%',
    backgroundColor: lightGray,
    height: verticalScale(1),
  },
  subTitleStyle: {
    color: midGray,
    fontSize: moderateScale(16),
  },
});
