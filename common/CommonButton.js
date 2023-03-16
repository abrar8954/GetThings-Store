import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({ title, bgcolor, textcolor, onPress }) => {
    return (
        <TouchableOpacity style={{ width: '90%', height: 60, backgroundColor: bgcolor, marginTop: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', }} onPress={() => {onPress()}}>
            <Text style={{ color: textcolor, fontSize: 17, fontWeight: '600' }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton

const styles = StyleSheet.create({})