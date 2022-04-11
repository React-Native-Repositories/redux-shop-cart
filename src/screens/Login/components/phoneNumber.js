import React, {useRef, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {Loginstyles} from '../styles';
import {colors} from '../../../common/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoLoginIconSvg from '../../../assets/svg/files/logo-login-svg';
import PhoneInput from 'react-native-phone-number-input';

export default function UIPhoneNumber(props) {
  const [countryCode, setCountryCode] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const phoneInput = useRef(null);

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  // console.log(phoneInput.current.state)
  // console.log(value);
  // console.log(formattedValue)
  return (
    <View style={Loginstyles.LoginContainer}>
      <View style={Loginstyles.formContainer}>
        <View style={Loginstyles.textInputWrapper}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IN"
            layout="first"
            onChangeText={text => {
              setValue(text);
            }}
            onChangeFormattedText={text => {
              setFormattedValue(text);
            }}
            style={Loginstyles.textInput}
            textInputStyle={{
              padding: 0,
            }}
            textContainerStyle={{
              backgroundColor: 'white',
            }}
            placeholder={'Enter Phone Number'}
            // autoFocus
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
