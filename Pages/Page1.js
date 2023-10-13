import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mảng user với email và password
  const users = [
    { email: 'duy@gmail.com', password: '123' },
    { email: 'long@gmail.com', password: '321' },
    // Thêm các tài khoản người dùng khác nếu cần
  ];

  const handleLogin = () => {
    // Kiểm tra xem có user nào trong mảng khớp với email và password người dùng nhập
    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
      setIsLoggedIn(true);
      alert('Đăng nhập thành công!');
    } else {
      setIsLoggedIn(false);
      alert('Đăng nhập không thành công. Vui lòng kiểm tra lại email và password.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.styles1}>
        <Text style={[styles.customText, { paddingLeft: 20 }]}> LOGIN</Text>
      </View>
      <View style={styles.styles2}>
        <TextInput
          type="text"
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          type="text"
          secureTextEntry = 'true'
          placeholder="Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Image
          source={require('../img/avatar_user 1.svg')}
          style={[{
            width: 30,
            height: 30,
            flexShrink: 0,
            position: 'absolute',
            marginTop: 10,
            marginRight: 280
          }]}
        />
        <Image
          source={require('../img/lock1-152879 1 .svg')}
          style={[{
            width: 30,
            height: 30,
            flexShrink: 0,
            position: 'absolute',
            marginTop: 95,
            marginRight: 280
          }]}
        />
        <Image
          source={require('../img/eye 1.svg')}
          style={[{
            width: 30,
            height: 30,
            flexShrink: 0,
            position: 'absolute',
            marginTop: 95,
            marginLeft: 250
          }]}
        />
      </View>
      <View style={styles.styles3}>
        <TouchableOpacity style={styles.customButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.styles4}>
        <Text style={[styles.text, styles.customText1]}> CREATE ACCOUNT</Text>
      </View>
      <View style={styles.styles5}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(180deg, #FBCB00 0%, #BF9A00 100%)',
  },
  styles1: {
    flex: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  styles2: {
    flex: 3,
    alignItems: 'center',
  },
  styles3: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  styles4: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styles5: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  customText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    marginRight: 'auto',

  },
  customText1: {
    color: '#000',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    fontWeight: 'bold',
  },
  customButton: {
    backgroundColor: '#060000',
    width: '330px',
    height: '45px',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 'normal',
    borderRadius: '2px',
  },
  input: {
    borderWidth: 1,
    border: ' 1px solid var(--Gray-6, #F2F2F2)',
    width: '330px',
    height: '54px',
    marginBottom: 30,
    backgroundColor: 'rgba(196, 196, 196, 0.30)',
    flexShrink: 0,
    paddingLeft: 55,
  },
  text: {
    marginBottom: 10,
  },
});
