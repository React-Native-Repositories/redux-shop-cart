import {Image, Text, View} from 'react-native';
import React from 'react';
import {Splashstyles} from './styles';
import LogoIconSvg from '../../assets/svg/files/logo-svg';

export default function SplashScreen() {
  return (
    <View style={Splashstyles.mainContainer}>
      <View style={Splashstyles.imageWrapper}>
        <LogoIconSvg height={30} width={30} style={{height: 30, width: 30}} />
        {/* <Image source={{uri:'https://pravarshaindustries.com/img/favicon.png'}} style={{width:100,height:100}}/> */}
      </View>
      {/* <View style={Splashstyles.textWrapper}>
        <Text style={Splashstyles.text}>SK Shoping Kart</Text>
      </View> */}
    </View>
  );
}
