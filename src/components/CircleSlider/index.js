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
import {useNavigation} from '@react-navigation/native';

const ListItem = ({item}) => {
  const navigation = useNavigation();
  
  return (
    <View style={styles1.item}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Category', {
            item: item,
          })
        }>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          }}
          style={styles1.itemPhoto}
          resizeMode="center"
        />
        <Text style={styles1.itemText}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function CircleSlider(props) {
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
    marginTop: hp(10),
    marginBottom: hp(10),
  },
  itemPhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: colors.textGray,
  },
  itemText: {
    color: colors.black,
    marginTop: 5,
  },
});
