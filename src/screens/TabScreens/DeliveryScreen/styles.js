import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../common/colors';
import {hp} from '../../../dimensions';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: {
    width:'95%'
  },
  textHeader:{
    color:colors.black,
    fontWeight:'800',
    fontSize:20,
    marginBottom:5
  }
});
