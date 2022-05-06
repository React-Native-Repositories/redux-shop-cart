// https://www.reactnativeschool.com/vertical-and-horizontal-scrolling-in-a-sectionlist-flatlist
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../dimensions';
import {colors} from '../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ListItem = props => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        })
      }>
      <View style={styles1.item}>
        <Image
          source={{
            uri: props.item.image,
          }}
          style={styles1.itemPhoto}
          resizeMode="center"
        />
      </View>
      <View style={styles1.mainContainer}>
        <View style={styles1.textContainer}>
          <View style={styles1.itemTextContainer1}>
            <Text style={styles1.itemText1}>
              {props.item?.title.split(' ')[0]}{' '}
              {props.item?.title.split(' ')[1]}{' '}
              {props.item?.title.split(' ')[2]}
            </Text>
            <View style={styles1.itemText2}>
              <Text style={styles1.text1}>
                {parseFloat(
                  props.item?.rating?.rate ? props.item?.rating?.rate : 0,
                ).toFixed(1)}
              </Text>
              <Icon
                name="star-sharp"
                size={12}
                color={colors.white}
                style={styles1.icon}
              />
            </View>
          </View>

          <View style={styles1.itemTextContainer2}>
            <Text style={styles1.itemTextCategory}>
              {props.item?.category?.name}
            </Text>
            <Text style={styles1.price}>₹ {props.item?.price} for one </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function VerticalSlider(props) {
  return (
    <View>
      <SectionList
        // contentContainerStyle={{paddingHorizontal: 10}}
        stickySectionHeadersEnabled={false}
        sections={props.data}
        renderSectionHeader={({section}) => (
          <>
            {/* <Text style={styles.sectionHeader}>{section.title}</Text> */}
            {section.horizontal ? (
              <FlatList
                horizontal
                data={section.data}
                renderItem={({item}) => <ListItem {...props} item={item} />}
                showsHorizontalScrollIndicator={false}
                {...props}
              />
            ) : null}
          </>
        )}
        renderItem={({item, section}) => {
          if (section.horizontal) {
            return null;
          }
          return <ListItem item={item} {...props} />;
        }}
      />
    </View>
  );
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    marginRight: 10,
    alignItems: 'center',
    width: '100%',
    height: hp(170),
    marginTop: hp(10),
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: colors.textGray,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemPhoto: {
    width: '100%',
    height: '100%',
    // borderRadius: 10,
  },
  mainContainer: {
    // position:'absolute',
    // bottom:0,
    width: '100%',
    backgroundColor: colors.white,
    minHeight: hp(40),
    borderWidth: 1,
    borderColor: colors.textGray,
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  textContainer: {
    width: '90%',
  },
  itemTextContainer1: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  itemText1: {
    width: '80%',
    color: colors.black,
    fontWeight: '500',
    fontSize: 16,
  },
  itemTextCategory: {
    color: colors.black,
    fontSize: 12,
  },
  itemTextContainer2: {
    marginBottom: 5,
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
    alignItems: 'center',
  },
  text1: {
    marginLeft: 3,
    color: colors.white,
  },
  icon: {
    marginRight: 3,
    marginLeft: 2,
    // marginTop: 4,
  },
  price: {
    color: colors.black,
    fontSize: 12,
  },
});
