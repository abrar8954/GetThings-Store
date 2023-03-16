import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({ title, right, bgcolor, isIcon, isTouch, onPress }) => {
        return (

                <View style={{ width: '100%', backgroundColor: '#fff', height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 25 }}>
                        <Text style={{ fontSize: 25, fontWeight: '600', color: '#000' }}>{title}</Text>
                        {
                                isIcon ?
                                        (
                                                <TouchableOpacity onPress={() => onPress()} disabled={ isTouch ? false : true}>
                                                        <Image source={right} style={{ width: 35, height: 35 }} />
                                                </TouchableOpacity>
                                        )
                                        :
                                        (<Text style={{ fontSize: 16, fontWeight: '400', color: '#000' }} >{right}</Text>)
                        }


                </View>

        )
}

export default Header

const styles = StyleSheet.create({})