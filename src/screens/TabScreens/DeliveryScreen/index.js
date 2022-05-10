import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  Dimensions,
  View,
  SectionList,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CircleSlider from '../../../components/CircleSlider';
import FlatListSlider from '../../../components/FlatlistSlider/FlatListSlider';
import Preview from '../../../components/FlatlistSlider/Preview';
import HorizontalSlider from '../../../components/HorizontalSlider';
import OffersSlider from '../../../components/OffersSlider';
import VerticalSlider from '../../../components/VerticalSlider';
import {hp, wp} from '../../../dimensions';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../common/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import {getProductList} from '../../../redux/actionCreators/products/index';
import {getCategoryListList} from '../../../redux/actionCreators/categories/index'
import {connect} from 'react-redux';

// https://unsplash.com/s/photos/dish

function DeliveryScreen(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */
  const [data] = useState([
    {
      image:
        'https://www.shopickr.com/wp-content/uploads/2019/06/myntra-end-of-reason-sale-fashion-summers-june-2019-coupon.jpg',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://i.ytimg.com/vi/PPZlw6OF8oI/maxresdefault.jpg',
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://www.shopickr.com/wp-content/uploads/2019/02/myntra-accessories-sale.jpg',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://s3b.cashify.in/gpro/uploads/2022/02/24194954/Myntra-Upcoming-Sales-2022.jpg',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://static.toiimg.com/thumb/msid-81240948,width-1200,height-900,resizemode-4/.jpg',
      desc: 'Sample Description below the image for representation purpose only',
    },
  ]);
  const [data1] = useState([
    {
      image:
        'https://i.pinimg.com/originals/6f/66/29/6f66290a7db1fb8b61ff90529435d5be.jpg',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://www.couponsloka.com/wp-content/uploads/2019/11/myntra_v3.jpg',
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image:
        'https://i.pinimg.com/originals/0b/46/ce/0b46ceb1581581d7ca5069c7120d269b.jpg',
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image:
        'https://pbs.twimg.com/media/ENqhlaLU4AAWDgy.jpg',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://in.apparelresources.com/wp-content/uploads/sites/3/2020/06/Myntra%E2%80%99s-EORS-2020.jpg',
      desc: 'Sample Description below the image for representation purpose only',
    },
  ]);
  const SECTIONS = [
    {
      // title: 'Made for you',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/8/22/9bfef665-73ea-4939-9c19-7656f93fe11e1598107602597-prebuzz-header.gif',
        },
 
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://1.bp.blogspot.com/-s57MtabKU0g/YEGtmoe8MCI/AAAAAAAAEwo/koiQd1CZ9NslEbpW-bd19eK3BnZ1y6bqACLcBGAsYHQ/s16000/MainBanner_71865.jpg',
        },

        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2020/9/7/97763f84-6e49-41bb-80e0-9d8034006a4a1599481995876-Header-fin.jpg',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://pbs.twimg.com/media/D0ZpN1YUYAAKHN0.jpg',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://pbs.twimg.com/media/EFotqZAU0AElhh9.jpg',
        },
      ],
    },
  ];
  const OFFERS = [
    {
      // title: 'Made for you',
      horizontal: true,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://hungamadeal.co.in/wp-content/uploads/2019/09/other-5.jpg',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://i.pinimg.com/originals/fd/1e/cc/fd1ecc7f6d8b956809ee7e5c055cdf9b.jpg',
        },
      ],
    },
  ];
  const SECTIONS1 = [
    {
      // title: 'Made for you',
      horizontal: false,
      data: [
        {
          key: '1',
          text: 'Item text 1',
          uri: 'https://images.unsplash.com/photo-1610057099443-64836ddec508?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        },
        {
          key: '2',
          text: 'Item text 2',
          uri: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },

        {
          key: '3',
          text: 'Item text 3',
          uri: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
        {
          key: '4',
          text: 'Item text 4',
          uri: 'https://images.unsplash.com/photo-1622768505337-ed0f06f22b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
        },
        {
          key: '5',
          text: 'Item text 5',
          uri: 'https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        },
      ],
    },
  ];

  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    props.getCategoryListList();
    props.getProductList();

  }, []);

  // console.log(props.allProducts, '-0-0-0-0-0-0');
  /* -------------------------------------------------------------------------- */
  /*                               API Section                                  */
  /* -------------------------------------------------------------------------- */


  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */
  const screenWidth = Math.round(Dimensions.get('window').width);
  const refRBSheet = useRef();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <View style={styles.location}>
            <Icon name="location-outline" size={25} color={colors.red} />
          </View>
          <View style={styles.address}>
            <TouchableOpacity onPress={() => refRBSheet.current.open()}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.addressText}>Home</Text>
                <Icon
                  name="ios-chevron-down-outline"
                  size={25}
                  style={{top: -2}}
                  color={colors.red}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.addressDescription}>
              Dno 12-7/1, Tarakarama Street...
              {/* , Tiruchano.. */}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <View style={styles.headerRight}>
            <View style={styles.profile}></View>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll}>
        <FlatListSlider
          data={data}
          height={hp(200)}
          timer={4000}
          imageKey={'image'}
          local={false}
          width={screenWidth}
          separator={0}
          loop={true}
          autoscroll={false}
          // currentIndexCallback={index => console.log('Index', index)}
          onPress={item => alert(JSON.stringify(item))}
          indicator={true}
          animation
        />
        <View style={styles.separator} />
        <FlatListSlider
          data={data1}
          width={wp(255)}
          timer={4000}
          component={<Preview />}
          separator={0}
          onPress={item => alert(JSON.stringify(item))}
          indicatorActiveWidth={10}
          autoscroll={false}
          indicator={false}
          contentContainerStyle={styles.contentStyle}
        />
        <View style={styles.separator} />
        <View style={styles.headerWraper}>
          <Text style={styles.textHeader}>Categories</Text>
          <Text style={styles.textHeaderLeft}>View All</Text>
        </View>
        {props.categories.categoryLoading ? (
          <View>
          <Text style={{textAlign:'center',marginTop:2}}>Please wait...</Text>
          </View>
        ) : (
          <>
        <CircleSlider data={[
                {
                  horizontal: true,
                  data:
                    props.categories.categoryList.length > 0
                      ? props.categories.categoryList
                      : [],
                },
              ]} />
        <Text style={styles.textHeader}>Offers</Text>
        </>)}
        <OffersSlider data={OFFERS} />

        <Text style={styles.textHeader}>Summer Offers</Text>
        <HorizontalSlider data={SECTIONS} />

        <View style={styles.headerWraper}>
          <Text style={styles.textHeader}>All Products ({props.productsList.productList.length})</Text>
          <Text style={styles.textHeaderLeft}>See All</Text>
        </View>
        {props.productsList.productsLoading ? (
          <View>
          <Text style={{textAlign:'center',marginTop:2}}>Please wait...</Text>
          </View>
        ) : (
          <>
            <VerticalSlider
              data={[
                {
                  horizontal: false,
                  data:
                    props.productsList.productList.length > 0
                      ? props.productsList.productList
                      : [],
                },
              ]}
            />
            <View style={{marginTop: 10}}></View>
          </>
        )}
      </ScrollView>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: colors.textGray,
              width: '90%',
              marginTop: 5,
              borderRadius: 5,
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="location"
              size={25}
              color="gray"
              style={{alignSelf: 'center', overflow: 'hidden'}}
            />
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 16,
                color: colors.gray,
              }}>
              Address1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: colors.textGray,
              width: '90%',
              marginTop: 5,
              borderRadius: 5,
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name="location"
              size={25}
              color="gray"
              style={{alignSelf: 'center', overflow: 'hidden'}}
            />
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 16,
                color: colors.gray,
              }}>
              Address2
            </Text>
          </TouchableOpacity>
        </RBSheet>
      </View>
    </SafeAreaView>
  );
}

const mapStateToProps = state => {
  return {
    productsList: state.products,
    categories:state.categories
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getProductList: () => dispatch(getProductList()),
    getCategoryListList:() => dispatch(getCategoryListList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryScreen);
