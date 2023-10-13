import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, CheckBox, Button, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
            <View style={styles.style_1}>
                <View style = {styles.style_2}>
                    <Image style = {styles.Img_style} source = {require('../img/book.png')}/>   
                </View>
                <View style = {styles.style_3}>
                    <Text style = {styles.text_style1}>Nguyên hàm tích phân và ứng dụng</Text>
                </View>
              
                   
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    style_1:{
       width: '100%',
       height: 283,
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: '#fff',
       
       
    },
    style_2:{
        flex:1,
        
    },
    style_3:{
        flex:1,
       
    },
    Img_style:{
        width: 104,
        height: 127,
    },
    text_style1:{
        color: '#000',
        fontFamily: 'Roboto',
        fontSize: 12,
        lineHeight: 14,
        textAlign: 'center',

    },

});
