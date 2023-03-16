import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/Actions';
// let addressList = [];

const MyAddress = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const addressList = useSelector(state => state.AddressReducer);
    const dispatch = useDispatch();
    console.log(addressList);
    return (
        <View style={{ flex: 1, }}>
            <View style={{ flexDirection: 'row', height: 70, elevation: 5, backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }}>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>My Address</Text>
                <TouchableOpacity style={{ borderWidth: 1.0, padding: 5, borderRadius: 10 }} onPress={() => { navigation.navigate('AddAddress') }}>
                    <Image source={require('../assests/plus.png')} style={{ width: 15, height: 15 }} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={addressList}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flex: 1, }}>
                            <View style={{ borderWidth: 0.5, marginTop: 10, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', padding: 10 }}>
                                <View>
                                    <Text style={{ fontSize: 17, fontWeight: '400', marginTop: 5 }}>{'City ' + item.city}</Text>
                                    <Text style={{ fontSize: 17, fontWeight: '400', marginTop: 5 }}>{'Area ' + item.building}</Text>
                                    <Text style={{ fontSize: 17, fontWeight: '400', marginTop: 5 }}>{'PinCode ' + item.pin}</Text>
                                </View>
                                <TouchableOpacity style={{}} onPress={() => {dispatch(deleteAddress(index))}}>
                                    <Image source={require('../assests/delete.png')} style={{width: 25, height: 25}}/>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )

                }}
            />
        </View>
    )
}

export default MyAddress;

const styles = StyleSheet.create({})