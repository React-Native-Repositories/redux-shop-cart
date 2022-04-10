import {
  Alert,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {HomeStyles} from './styles';
import Shimmer from '../../../loader/HomeLoader';
import HomeCarousel from './components/carousel';
import {colors} from '../../../common/colors';
import {categoryStyles} from '../CategoryDetail/style';

export default function Home(props) {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */
  const [image] = useState([
    'https://pravarshaindustries.com/img/banners/QohZxRmakxjURNZkpnlVELjYJ09yMorwJxmMYoWu.png',
    'https://pravarshaindustries.com/img/banners/tpTbV4CipntYl4G8BnlApGEAi3ZZBuVluR9FJiNw.png',
  ]);
  const [categoryDetailInfo, setCategoryDetailInfo] = useState([
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
    {
      image:
        'https://pravarshaindustries.com/img/products/LVSLwHcEMvARBQnncBIWcru1fDiGKrQ8FtvsS9GM.png',
      headerText: 'Farm Fresh Homogenised Milk',
      actualAmount: '35',
      finalAmount: '500ml',
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  /* -------------------------------------------------------------------------- */
  /*                               UseEffect Section                            */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  /* -------------------------------------------------------------------------- */
  /*                               API Section                                  */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                               Onchange section                             */
  /* -------------------------------------------------------------------------- */

  return (
    <SafeAreaView style={HomeStyles.mainContainer}>
      <ScrollView style={HomeStyles.scrollContainer}>
        <View style={HomeStyles.carouselWarp}>
          <Shimmer
            autoRun={true}
            style={{height: '100%', width: '100%'}}
            visible={!isLoading}>
            {!isLoading ? (
              <HomeCarousel image={image} />
            ) : (
              <Text
                style={{
                  height: '100%',
                  width: '100%',
                  color: colors.white,
                }}></Text>
            )}
          </Shimmer>
        </View>
        <View style={HomeStyles.headerWrap}>
          <Text style={HomeStyles.headerText}>
            About Pravarsha Agro Industries
          </Text>
        </View>
        <View style={HomeStyles.subHeaderWrap}>
          <Text style={HomeStyles.subHeaderText}>
            Pravarsha Agro Industries as a corporate citizen which understands
            the enormous significance for the agro sector and industrial
            development. Leveraging the strength of superior product offerings,
            Pravarsha Agro Industries has strategized its forays into consumer
            market, with the aim to be market leaders earning respect and
            revenue for the stakeholders.
          </Text>
        </View>
        <View style={HomeStyles.headerWrap1}>
          <Text style={HomeStyles.headerText1}>Our Products</Text>
        </View>
        <View style={categoryStyles.listWrap}>
          <View>
            <FlatList
              data={categoryDetailInfo}
              renderItem={({item}) => (
                <View style={categoryStyles.itemWrap}>
                  <View style={categoryStyles.itemImageView}>
                    <Image
                      source={{uri: item.image}}
                      style={categoryStyles.itemImage}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={categoryStyles.mainWrap}>
                    <View style={categoryStyles.headerWrap}>
                      <Text style={categoryStyles.headerText}>
                        {item.headerText}
                      </Text>
                    </View>
                    <View style={categoryStyles.amountWrap}>
                      <Text>
                        <Text style={categoryStyles.amount1}>
                          ₹ {item.actualAmount}
                        </Text>
                        <Text style={{color: 'black'}}> / </Text>
                        <Text style={categoryStyles.amount2}>
                          {item.finalAmount}
                        </Text>
                      </Text>
                    </View>
                    <View style={categoryStyles.descriptionWrap}>
                      <ScrollView>
                        <Text style={categoryStyles.description}>
                          {item.description}
                        </Text>
                      </ScrollView>
                    </View>
                  </View>
                  <TouchableOpacity
                    raised
                    style={categoryStyles.submitButton}
                    // icon={{name: 'check'}}
                    // onPress={() => props.navigation.navigate('')}
                  >
                    <View style={categoryStyles.submitWraper}>
                      <Text style={categoryStyles.submitText}>ADD TO CART</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
