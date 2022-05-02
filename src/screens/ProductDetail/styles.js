import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../common/colors';
import {hp, wp} from '../../dimensions';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    marginTop: hp(10),
  },
  mainContainer: {
    // flex: 1,
    // backgroundColor: colors.white,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginTop: hp(20),
    marginBottom: hp(80),
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
  header1: {
    width: '80%',
  },
  header2View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.green,
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  header2Text: {
    color: colors.white,
  },
  headertext: {
    fontWeight: '700',
    fontSize: 28,
    color: colors.black,
  },
  headertext1: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.black,
  },
  header2View1:{
    borderWidth:1,
    borderColor:colors.textGray,
    minHeight:hp(35),
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    justifyContent:'center'
  },
  header2View1Text:{
    color:colors.black,
    fontSize:12,
    alignSelf:'center',

  },
  headerdesc: {
    marginTop: 5,
    color: colors.gray,
  },
  header2: {
    // width:'40%'
  },
  headeeTimer: {
    padding: 1,
  },
  timer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    backgroundColor: colors.textGray,
    color: colors.black,
    padding: 4,
    borderRadius: 5,
    width: wp(80),
    textAlign: 'center',
  },
  timer2: {
    alignSelf: 'center',
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: {
    minHeight: hp(180),
    marginTop: hp(10),
    // backgroundColor: colors.textGray,
  },
  subMain: {
    // backgroundColor:colors.textGray,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: colors.textGray,
  },
  subText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(150),
    width: width,
  },
  itemPrice: {
    color: colors.black,
    marginLeft: hp(5),
    marginRight: hp(5),
    marginBottom: 5,
  },
  itemText: {
    color: colors.black,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: hp(5),
    marginRight: hp(5),
  },
  image: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  iconText: {
    marginRight: 5,
    marginLeft: 5,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText2: {
    minWidth: 10,
    borderRadius: 5,
    padding: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginLeft: 5,
    marginBottom: 7,
    alignItems: 'center',
  },
  text1: {
    marginLeft: 3,
    color: colors.white,
  },
  icon: {
    marginRight: 3,
    marginLeft: 2,
  },
});
