import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../common/colors';
import {hp} from '../../../dimensions';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  scroll: {
    width: '95%',
  },
  textHeader: {
    color: colors.black,
    fontWeight: '800',
    fontSize: 20,
    marginBottom: 5,
  },
  headerWraper:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeaderLeft:{
    color:colors.red,
    fontSize:14
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: hp(60),
    marginTop: hp(10),
    // borderColor:colors.white,
    // borderBottomColor:colors.textGray,
    // borderWidth:1,
    // marginBottom: hp(10),
  },
  headerLeft: {
    flex: 1,
    left: 12,
    flexDirection: 'row',
  },
  location: {
    marginTop: hp(9),
  },
  address: {
    marginLeft: 10,
  },
  addressText: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '700',
  },
  addressDescription: {
    fontSize: 12,
    width: 250,
    color: colors.black,
  },
  headerRight: {
    // flex: 1,
    right: 12,
  },
  profile: {
    height: 30,
    width: 30,
    backgroundColor: '#cb202d',
    borderRadius: 15,
  },
});
