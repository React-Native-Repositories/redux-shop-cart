import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import UIPhoneNumber from './components/phoneNumber';
import {Loginstyles} from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LogoLoginIconSvg from '../../assets/svg/files/logo-login-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import {hp} from '../../dimensions';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors} from '../../common/colors';

export default function LoginScreen(props) {
  const onSubmitPhoneNumer = path => {
    props.navigation.navigate({
      name: path ? path : 'Main',
    });
  };
  const refRBSheet = useRef();

  return (
    <KeyboardAwareScrollView style={Loginstyles.mainContainer}>
      <View style={Loginstyles.container1}></View>
      <View style={Loginstyles.container2}>
        <Text style={Loginstyles.headerText}>
          India's #1 Food Delevery and Dining App
        </Text>
        <View style={Loginstyles.seperateWrapper}>
          <View style={Loginstyles.line} />
          <View>
            <Text style={Loginstyles.lineText}>Login or sign up</Text>
          </View>
          <View style={Loginstyles.line} />
        </View>

        <UIPhoneNumber onSubmitPhoneNumer={onSubmitPhoneNumer} />

        <View style={Loginstyles.seperateWrapper}>
          <View style={Loginstyles.line} />
          <View>
            <Text style={Loginstyles.lineText}>or</Text>
          </View>
          <View style={Loginstyles.line} />
        </View>

        <View style={Loginstyles.iconWraper}>
          <TouchableOpacity style={Loginstyles.iconView}>
            <Icon
              name="md-logo-google"
              size={20}
              color="gray"
              style={Loginstyles.icon}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 10, marginRight: 10}}></View>
          <TouchableOpacity
            style={Loginstyles.iconView}
            onPress={() => refRBSheet.current.open()}>
            <Icon
              name="ellipsis-horizontal-sharp"
              size={20}
              color="gray"
              style={Loginstyles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: hp(20)}}>
          <Text style={Loginstyles.footerText}>
            By Continuing, You agree to our
          </Text>
          <Text style={Loginstyles.footerText}>
            Terms of Service, Privacy Policy and Content Policy
          </Text>
        </View>
      </View>
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
              flexDirection:'row',
              alignSelf: 'center',
              justifyContent:'center'
            }}>
              <Icon
              name="md-logo-facebook"
              size={25}
              color="gray"
              style={Loginstyles.icon}
            />
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 16,
                color: colors.gray,
              }}>
              Continue with Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: colors.textGray,
              width: '90%',
              marginTop: 5,
              borderRadius: 5,
              flexDirection:'row',
              alignSelf: 'center',
              justifyContent:'center'

            }}>
               <Icon
              name="mail"
              size={25}
              color="gray"
              style={Loginstyles.icon}
            />
            <Text
              style={{
                textAlign: 'center',
                padding: 10,
                fontSize: 16,
                color: colors.gray,
              }}>
              Continue with Email
            </Text>
          </TouchableOpacity>
        </RBSheet>
      </View>
    </KeyboardAwareScrollView>
  );
}
