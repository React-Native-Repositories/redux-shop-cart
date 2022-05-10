import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../common/colors';
import {hp, wp} from '../../dimensions';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: hp(10),
    // marginBottom: hp(10),
    height: height,
    // backgroundColor: colors.white,
  },
  mainContainer: {
    // alignSelf: 'center',
    width: '100%',
    // marginTop: hp(10),
    flex: 1,
  },

  scroll: {
    height: height,
    // marginBottom: hp(20),
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(10),
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  headerLeft: {},
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon1: {
    marginLeft: 10,
    marginRight: 10,
  },
  circle: {},
  icon2: {},

  item: {
    width: '100%',
    height: 400,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: hp(10),
  },
  itemPhoto: {
    width: '100%',
    height: '100%',
  },
  detail: {
    backgroundColor: colors.white,
  },
  title: {
    width: '80%',
    alignSelf: 'center',
    color: colors.black,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 10,
  },
  subtitle: {
    marginTop: 10,
    color: colors.black,
    fontSize: 14,
    width: '80%',
    alignSelf: 'center',
  },
  desc: {
    width: '80%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    marginRight: 10,
    color: colors.black,
  },
  priceLine: {
    fontSize: 16,
    marginRight: 10,
    textDecorationLine: 'line-through',
    color: colors.gray,
  },
  more: {
    width: '80%',
    alignSelf: 'center',
    color: colors.green,
    marginBottom: 20,
  },
  offer: {
    color: colors.red,
    fontSize: 16,
    fontWeight: '500',
  },
  descriptionView: {
    marginTop: hp(10),
    backgroundColor: colors.white,
  },
  description: {
    fontSize: 14,
    width: '80%',
    alignSelf: 'center',
    marginTop: hp(10),
    marginBottom: hp(10),
  },

  rating: {
    position: 'absolute',
    backgroundColor: '#F2F3F4',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    right: 15,
    bottom: 15,
    padding: 5,
    borderRadius: 5,
    width: wp(80),
  },
  icon: {
    marginLeft: 3,
  },
  verticleLine: {
    height: '80%',
    width: 1,
    backgroundColor: colors.gray,
    marginLeft: 5,
    marginRight: 5,
  },
  rating1: {
    // width:wp(30),
    flexDirection: 'row',
    justifContent: 'space-between',
    alignItems: 'center',
  },
});
