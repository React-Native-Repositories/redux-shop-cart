import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../common/colors';
import {hp} from '../../../dimensions';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    // width:'90%'
  },
  container: {
    flex: 1,
    // backgroundColor: 'red',
    marginBottom: hp(10),
  },
  app: {
    flex: 1, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: width,
    minHeight: 400,
    marginTop: hp(5),
    width: '90%',
  },
  price:{
    color:colors.black
  }
 
});
