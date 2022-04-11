import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../common/colors';
import {hp, wp} from '../../dimensions';
const {width, height} = Dimensions.get('window');

export const Loginstyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container1: {
    flex: 1,
    alignSelf: 'center',
    height: height / 2,
    backgroundColor: '#cb202d',
    width: '100%',
  },
  container2: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
    // backgroundColor: 'red',
  },
  headerText: {
    fontSize: 25,
    color: colors.black,
    fontFamily: 'GoogleSans-Bold',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: hp(20),
    width: '80%',
  },
  headerSeperator: {
    width: '80%',
    marginTop: hp(20),
    alignSelf: 'center',
    textAlign: 'center',
  },

  LoginContainer: {
    alignItems: 'center',
    fontFamily: 'GoogleSans-Medium',
  },
  seperateWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
    width: '80%',
    alignSelf: 'center',
    marginBottom: hp(20),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.textGray,
  },
  lineText: {
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
    color: colors.black,
  },
  iconWraper: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: hp(20),
    width: '50%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: hp(20),
  },
  iconView: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
    overflow: 'hidden',
  },
  footerText: {
    fontSize:12,
    color: colors.gray,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
  },

  textWrapper: {
    // marginTop: hp(48),
    // height: hp(20),
    // marginBottom: (40),
  },

  phoneWrapper: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    // width: wp(width - 76),
    width: '85%',
    alignItems: 'center',
  },

  textInputWrapper: {
    marginLeft: 8,
    borderColor: colors.textGray,
    borderWidth: 1,
  },
  textInput: {
    fontSize: 18,
    letterSpacing: 3,
    borderBottomColor: colors.textGray,
    borderColor: colors.textGray,
    color: colors.secondaryColor,
    fontFamily: 'GoogleSans-Medium',
  },
  placeholder: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    height: hp(20),
    color: colors.black,
    marginTop: hp(10),
    marginBottom: hp(10),
    marginLeft: 10,
    minHeight: hp(16),
  },
  subTextWrapper: {
    alignItems: 'center',
  },
  subtext: {
    fontSize: 12,
    color: colors.white,
    marginTop: 17,
  },

  submitWraper: {
    borderWidth: 1,
    justifyContent: 'center',
    bottom: 0,
    // width: wp(width - 76),
    width: '100%',
    alignSelf: 'center',
    marginTop: hp(16),
    borderColor: colors.white,
  },
  submitButton: {
    backgroundColor: '#cb202d',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(38),
    borderRadius: 5,
  },
  submitText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'GoogleSans-Medium',
  },

  carouselWrap: {
    marginTop: hp(43),
    height: hp(380),
    justifyContent: 'flex-end',
  },

  formContainer: {
    width: '85%',
  },

  textInputWrapper1: {
    borderWidth: 1,
    borderColor: colors.textGray,
    color: colors.black,
    fontSize: 16,
    backgroundColor: colors.white,
    marginTop: 4,
    marginBottom: 16,
    borderRadius: 4,
    paddingLeft: 24,
    borderWidth: 1,
    borderColor: 'red',
  },
});
