
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet,flexDirection } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-web';

export default function App() {
  

  return (
    <View style={styles.container} >
        <View style={styles.style1}>
           <Image source = {require('../img/usb.png')} style={styles.usb_Style}/>
           <Text style={styles.text_style}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
        </View>,
        <View style={styles.style2}>
          <Text style={styles.text_style2}>Cực kỳ hài lòng</Text>
        </View>,
        <View style = {styles.style2}>
            <Image style={styles.start_style} source={require('../img/start.png')}/>
            <Image style={styles.start_style} source={require('../img/start.png')}/>
            <Image style={styles.start_style} source={require('../img/start.png')}/>
            <Image style={styles.start_style} source={require('../img/start.png')}/>
            <Image style={styles.start_style} source={require('../img/start.png')}/>
            
        </View>
        <View style= {styles.style3}>
          <Image style = {styles.camera_style} source={require('../img/camera.png')}/>
          <Text style={styles.text_style2}>Thêm hình ảnh</Text>
        </View>
        <View style={styles.style4}>
              <Text style={styles.text_style3}>
                Hãy chia sẻ những điều mà bạn thích về sản phẩm</Text>  
              
              <a style={styles.text_style4} href="https://meet.google.com/nsj-ojwi-xpp">https://meet.google.com/nsj-ojwi-xpp</a>
        </View>
        <View style = {styles.style5}>
          <TouchableOpacity style = {styles.button_style}>
          <Text style = {styles.text_button}>GỬI</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#fff',
},
  style1:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  style2:{
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  style3:{
    flex: 0.4 ,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#1511EB",
    borderRadius: '5px',
    paddingRight: 120,
    paddingLeft: 120,
    marginTop: 30,
    marginBottom: 18,
  
  },
  style4:{
    flex: 1.2,
    //justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    padding: 5
  
  },
  style5:{
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#0D5DB6',
    borderRadius: '5px',
    margin: 25
  },
  button_style:{
    paddingLeft: 180,
    paddingRight: 180,
    paddingTop: 10,
    paddingBottom: 10,
    

  },
  usb_Style:{
    width: 95,
    height: 95,
    marginHorizontal: 10,
  },
  camera_style:{
    width: 39,
    height: 32,
  
  },
  text_style:{
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 19,
    letterSpacing: 0,
  },
  text_style2:{
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: '21.09 px',
    textAlign: "center",
    
  },
  text_style3:{
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "700",
    lineHeight: '21.09 px',
    textAlign: "center",
    color: "#C4C4C4",
  },
  text_style4:{
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14.06,
    textAlign: "center",
    color: "black",
    marginTop: 80,
    marginLeft: 200
    //marginEnd: 10,
  },
  start_style:{
    width: 40,
    height: 40,
    margin: 10
  },
  text_button:{
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 23.44,
    textAlign: "center",
    
  }
  
});
