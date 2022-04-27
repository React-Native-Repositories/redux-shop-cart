// https://www.reactnativeschool.com/vertical-and-horizontal-scrolling-in-a-sectionlist-flatlist
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {hp, wp} from '../../dimensions';
import {colors} from '../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = ({item}) => {
  return (
    <View>
      <View style={styles1.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles1.itemPhoto}
          resizeMode="cover"
        />
     
      </View>
      <View style={styles1.mainContainer}>
        <View style={styles1.textContainer}>
          <View style={styles1.itemTextContainer1}>
            <Text style={styles1.itemText1}>{item.name}</Text>
            <View style={styles1.itemText2}>
              <Text style={styles1.text1}>
                {parseFloat(item.note ? item.note : 0).toFixed(1)}
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
            <Text style={styles1.itemTextCategory}>{item?.category?.name}</Text>
            <Text style={styles1.price}>₹ 250 for one </Text>
          </View>
        </View>
      </View>

    </View>
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
                renderItem={({item}) => <ListItem item={item} />}
                showsHorizontalScrollIndicator={false}
              />
            ) : null}
          </>
        )}
        renderItem={({item, section}) => {
          if (section.horizontal) {
            return null;
          }
          return <ListItem item={item} />;
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
  },
  itemPhoto: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
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
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
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
  },
  text1: {
    marginLeft: 3,
    color: colors.white,
  },
  icon: {
    marginRight: 3,
    marginLeft: 2,
    marginTop: 4,
  },
  price: {
    color: colors.black,
    fontSize: 12,
  },
});
