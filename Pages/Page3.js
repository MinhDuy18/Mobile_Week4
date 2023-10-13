import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, CheckBox, Button, TouchableOpacity } from 'react-native';

export default function App() {
    const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecialSymbol, setIncludeSpecialSymbol] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.sub_container}>
        <View style={styles.styel1}>
          <Text style={styles.text_style1}>PASSWORD {'\n'} GENERATOR</Text>
        </View>
        <View style={styles.styel2}>
            <TextInput style = {styles.TextInput_style} value=''></TextInput>
        </View>
        <View style = {styles.styel3}>
            <View style = {styles.styel4}>
                    <Text style = {styles.text_style2}>Password length</Text>
                    <TextInput style = {styles.TextInput_style2}></TextInput>
            </View>
            <View style = {styles.styel4}>
                    <Text style = {styles.text_style2}>Include lower case letters</Text>
                    <CheckBox style = {styles.CheckBox_style}
                        value={includeLowercase} 
                        onValueChange={(newValue) => setIncludeLowercase(newValue)}
                    ></CheckBox>
            </View>
            <View style = {styles.styel4}>
                    <Text style = {styles.text_style2}>Include upcase letters</Text>
                    <CheckBox style = {styles.CheckBox_style}
                        value={includeUppercase} 
                        onValueChange={(newValue) => setIncludeUppercase(newValue)}
                    ></CheckBox>
            </View>
            <View style = {styles.styel4}>
                    <Text style = {styles.text_style2}>Include number</Text>
                    <CheckBox style = {styles.CheckBox_style}
                        value={includeNumber}
                        onValueChange={(newValue=> setIncludeNumber(newValue))}
                    ></CheckBox>
            </View>
            <View style = {styles.styel4}>
                    <Text style = {styles.text_style2}>Include special symbol</Text>
                    <CheckBox style = {styles.CheckBox_style}
                        value={includeSpecialSymbol}
                        onValueChange={(newValue=> setIncludeSpecialSymbol(newValue))}
                    ></CheckBox>
            </View>
        </View>
        <View style = {styles.styel5}>
            <TouchableOpacity style = {styles.Button_Style}>
                <Text style = {styles.text_style2}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3B3B98',
  },
  sub_container: {
    width: '90%',
    height: '90%',
    backgroundColor: '#23235B',
    borderRadius: 15,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  styel1: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styel2: {
    width: 297,
    height: 55,
    alignItems: 'center',
    backgroundColor: '#151537',
    marginTop: 30, 
    justifyContent: 'center',
  },
  styel3:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  styel4:{
    width: 297,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    
  },
  styel5:{
    width: 269,
    height: 55,
    marginBottom: 30
  },
  text_style1: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  text_style2: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    alignItems: 'center',
  },
  TextInput_style: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  
   
  },
  TextInput_style2: {
    backgroundColor: '#fff',
    width: 118,
    height: 33
  },
  CheckBox_style:{
    width: 25,
    height: 25,
    backgroundColor: '#fff',
  },
    Button_Style:{
        backgroundColor:'#3B3B98',
        height: 55,
        justifyContent: 'center',
       
    }
});
