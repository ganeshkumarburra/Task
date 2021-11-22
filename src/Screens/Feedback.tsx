import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import KVStorage from '../KVStorage';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const emailRef = createRef();
  const phoneRef = createRef();
  const contentRef = createRef();
  const handleSubmitButton = () => {
    if (!name || !email || !phone || !content) {
      Alert.alert('Warning', 'Please enter fields correctly');
    } else {
      KVStorage.set(email, {name, email, phone, content}).then(value => {
        Alert.alert('SuccessFul', 'Thanks for your Feedback');
        setName('');
        setEmail('');
        setContent('');
        setPhone('');
      });
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#e6f9f1'}}>
      <View style={styles.SectionStyle}>
        <Ionicons name="person" style={{marginRight: 10}} />
        <TextInput
          style={styles.inputStyle}
          onChangeText={Name => setName(Name)}
          underlineColorAndroid="#f000"
          placeholder="Enter Name"
          placeholderTextColor="#8b9cb5"
          autoCapitalize="sentences"
          returnKeyType="next"
          value={name}
          onSubmitEditing={() => emailRef.current && emailRef.current.focus()}
          onEndEditing={emailRef.current && emailRef.current.focus()}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.SectionStyle}>
        <MaterialCommunityIcons name="email" style={{marginRight: 10}} />
        <TextInput
          style={styles.inputStyle}
          onChangeText={email => setEmail(email)}
          underlineColorAndroid="#f000"
          placeholder="Enter Email"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          value={email}
          ref={emailRef}
          onSubmitEditing={() => phoneRef.current && phoneRef.current.focus()}
          onEndEditing={phoneRef.current && phoneRef.current.focus()}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.SectionStyle}>
        <MaterialCommunityIcons name="phone" style={{marginRight: 10}} />
        <TextInput
          style={styles.inputStyle}
          onChangeText={phone => setPhone(phone)}
          underlineColorAndroid="#f000"
          placeholder="Enter Phone"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          keyboardType="phone-pad"
          ref={phoneRef}
          value={phone}
          onSubmitEditing={() =>
            contentRef.current && contentRef.current.focus()
          }
          onEndEditing={contentRef.current && contentRef.current.focus()}
          blurOnSubmit={false}
        />
      </View>
      <View style={[styles.SectionStyle, {height: 'auto'}]}>
        <MaterialIcons name="feedback" style={{marginRight: 10}} />
        <TextInput
          style={[styles.inputStyle, {height: 100}]}
          onChangeText={content => setContent(content)}
          underlineColorAndroid="#f000"
          placeholder="Feedback please"
          placeholderTextColor="#8b9cb5"
          returnKeyType="next"
          multiline={true}
          value={content}
          ref={contentRef}
          blurOnSubmit={false}
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={handleSubmitButton}>
        <Text style={styles.buttonTextStyle}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
    alignItems: 'center',
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
