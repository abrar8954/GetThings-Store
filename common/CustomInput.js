import { StyleSheet, Text, TextInput, View, Image } from 'react-native'
import React from 'react'

const CustomInput = ({type, leftIcon, placeholder, value, keyboardType, onChangeText}) => {
  return (
    <View style={{borderWidth: .8, marginTop: 20, width: '90%', borderColor: '#BeBeBe', borderRadius: 10, alignSelf: 'center'}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={leftIcon} style={{width: 30, height: 30, marginLeft: 18, }}/>
        <TextInput secureTextEntry={type? true : false} placeholder={placeholder} style={{width: '80%', height: 50, marginLeft: 10}} value={value} keyboardType={keyboardType} onChangeText={(txt) => {onChangeText(txt)}}/>
      </View>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({})