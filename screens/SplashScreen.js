import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assests/cart.png')} />
            <Text style={{fontSize: 22, fontWeight: '600', color: '#000', marginTop: 20}}>GetThings Store</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})