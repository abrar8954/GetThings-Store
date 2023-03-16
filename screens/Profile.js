import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../common/Header'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const Profile = () => {
  // let name = '';
  // useEffect(() => {
  //   getData();
  // }, [])

  // const getData = async () => {
  //   name = await AsyncStorage.getItem('NAME');
  // }
  const navigation = useNavigation();

  function logOut() {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
      });
  }
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Profile'} isIcon={'yes'} right={require('../assests/logout.png')} isTouch={'yes'} onPress={() => logOut()} />
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Image source={require('../assests/profile.png')} style={{ width: 85, height: 85 }} />
        <Text style={{ marginTop: 10, fontSize: 20 }}>Abrar</Text>
      </View>
      <TouchableOpacity style={{ width: '90%', height: 50, borderBottomWidth: .6, borderColor: '#BeBeBe', marginTop: 25, alignSelf: 'center' }} onPress={() => { navigation.navigate('MyAddress') }}>
        <Text style={{ marginTop: 10, fontSize: 20 }}>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', height: 50, borderBottomWidth: .6, borderColor: '#BeBeBe', alignSelf: 'center', marginTop: 10 }}>
        <Text style={{ marginTop: 10, fontSize: 20 }}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '90%', height: 50, borderBottomWidth: .6, borderColor: '#BeBeBe', alignSelf: 'center', marginTop: 10 }}>
        <Text style={{ marginTop: 10, fontSize: 20 }}>Others</Text>
      </TouchableOpacity>

      {/* <View style={{ backgroundColor: 'gray', width: "92%", height: 0.8 }}></View> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})