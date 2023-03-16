import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../common/CustomInput'
import CommonButton from '../common/CommonButton'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress } from '../redux/Actions'

const AddAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, }}>
      <TouchableOpacity style={{ borderRadius: 22.5, borderWidth: 0.2, marginLeft: 20, padding: 7, marginTop: 15, width: 45, height: 45, justifyContent: 'center', alignItems: 'center', marginBottom: 50 }} onPress={() => navigation.goBack()}>
        <Image source={require('../assests/back.png')} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>

      <CustomInput leftIcon={require('../assests/buildings.png')} placeholder={'Enter City Name'} value={city} onChangeText={(txt) => { setCity(txt) }} />
      <CustomInput leftIcon={require('../assests/building.png')} placeholder={'Enter Area'} value={building} onChangeText={(txt) => { setBuilding(txt) }} />
      <CustomInput leftIcon={require('../assests/marker.png')} placeholder={'Enter Pincode'} value={pin} keyboardType={'number-pad'} onChangeText={(txt) => { setPin(txt) }} />
      <CommonButton title={'Save Address'} bgcolor={'#000'} textcolor={'#fff'} onPress={() => {
        if (city !== '' && building !== '' && pin !== '') {
          dispatch(addAddress({ city: city, building: building, pin: pin }));
        }
        navigation.goBack();
      }} />
    </View>
  )
}

export default AddAddress

const styles = StyleSheet.create({})