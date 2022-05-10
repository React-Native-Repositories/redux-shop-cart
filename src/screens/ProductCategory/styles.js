import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../common/colors';
import {hp, wp} from '../../dimensions';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    marginBottom: hp(10),
  },
  app: {
    flex: 2, // the number of columns you want to devide the screen into
    marginHorizontal: 'auto',
    width: width,
    minHeight: 400,
    marginTop: hp(5),
  },
  item: {
    flex: 1,
    margin: '2%',
    maxWidth: '100%', // 100% devided by the number of rows you want
    // my visual styles; not important for the grid
    // padding: 10,
    // backgroundColor: 'rgba(249, 180, 45, 0.25)',
    borderWidth: 1.5,
    borderColor: '#fff',
    marginTop: 50,
  },
  items: {
    width: width / 2,
    height: 280,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: hp(5),
  },
  itemPhoto: {
    width: '100%',
    height: '100%',
  },

  imageInfo: {
    position: 'absolute',
    backgroundColor: colors.white,
    color: colors.black,
    bottom: 0,
    minHeight:50,
    width:"100%"
  },
  imageText: {
    backgroundColor: colors.white,
    fontSize: 14,
    // textAlign: 'center',
    marginLeft:'5%',
    marginTop:hp(5)
    // marginBottom: hp(5),
  },
  more:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    margin:'5%'
  },
  rating:{
    flexDirection:'row',
    alignItems:'center'
  },
  icon:{
    marginLeft:'2%',
    marginRight:'2%',
  },
  title:{
    fontSize:18,
    fontWeight:'500',
    textAlign:'left',
    margin:'2%',
    color:colors.black
  }
});
