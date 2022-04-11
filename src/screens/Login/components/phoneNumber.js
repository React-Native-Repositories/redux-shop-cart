import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Loginstyles} from '../styles';
import {colors} from '../../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoLoginIconSvg from '../../../assets/svg/files/logo-login-svg';

export default function UIPhoneNumber(props) {
  const [countryCode, setCountryCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  return (
    <View style={Loginstyles.LoginContainer}>
      {/* <View style={Loginstyles.textWrapper}><LogoLoginIconSvg /></View> */}
      <View style={Loginstyles.formContainer}>
        <View style={Loginstyles.textInputWrapper}>
          <TextInput
            style={
              phoneNumber ? Loginstyles.textInput : Loginstyles.placeholder
            }
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Enter Phone Number"
            placeholderTextColor={colors.gray}
            keyboardAppearance="dark"
          />
        </View>
        <View style={Loginstyles.submitWraper}>
          <TouchableOpacity
            raised
            style={Loginstyles.submitButton}
            icon={{name: 'check'}}
            onPress={() => props.onSubmitPhoneNumer('Main')}>
            <Text style={Loginstyles.submitText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
