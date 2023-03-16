import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const GalleryCameraModal = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', width: '80%', height: '50%', position: 'absolute', backgroundColor: '#fff', top: 50 }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', }}>
        <Image source={require('../assests/camera.png')}/>
        <Image source={require('../assests/gallery.png')}/>
      </View>
    </View>
  )
}

export default GalleryCameraModal

const styles = StyleSheet.create({})