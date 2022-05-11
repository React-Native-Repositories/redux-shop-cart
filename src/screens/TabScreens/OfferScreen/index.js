import React,{useState} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import HorizontalSlider from '../../../components/HorizontalSlider';
import OffersSlider from '../../../components/OffersSlider';
import {hp, wp} from '../../../dimensions';
import FlatListSlider from '../../../components/FlatlistSlider/FlatListSlider';
import Preview from '../../../components/FlatlistSlider/Preview';
import {styles} from './styles';

function OfferScreen(props) {
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
      image: 'https://pbs.twimg.com/media/ENqhlaLU4AAWDgy.jpg',
      desc: 'Sample Description below the image for representation purpose only',
    },
    {
      image:
        'https://in.apparelresources.com/wp-content/uploads/sites/3/2020/06/Myntra%E2%80%99s-EORS-2020.jpg',
      desc: 'Sample Description below the image for representation purpose only',
    },
  ]);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.scroll}>
        <OffersSlider data={OFFERS} />
        <Text style={styles.textHeader}>Summer Offers</Text>
        <HorizontalSlider data={SECTIONS} />
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
      </ScrollView>
    </SafeAreaView>
  );
}

export default OfferScreen;
