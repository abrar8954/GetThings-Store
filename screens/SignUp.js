import { StyleSheet, Text, View, Image, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInput from '../common/CustomInput'
import CommonButton from '../common/CommonButton'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [userId, setCurrentUserId] = useState('');
    const [contactNo, setContactNo] = useState('');
    const navigation = useNavigation();
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    function onRegister() {

        auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                setCurrentUserId(auth().currentUser.uid);
                firestore().collection("users")
                    .doc(auth().currentUser.uid)
                    .set({
                        email,
                        userName,
                        userId,
                        contactNo

                    }).then(
                        () => {
                            navigation.navigate('Home')
                        })
            })
            .catch((e) => {
                ToastAndroid.show('Something went wrong...', ToastAndroid.LONG);
                console.log('Error in Authentication Singnup Screen', e);
                
            })
    }

    if (!user) {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={require('../assests/cart.png')} style={{ width: 60, height: 60, alignSelf: 'center', marginTop: '15%' }} />
                <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 24, fontWeight: '600', color: '#000' }}>Create Account</Text>
                <CustomInput placeholder={'Enter UserName'} leftIcon={require('../assests/name.png')} onChangeText={(txt) => { setUserName(txt) }} />
                <CustomInput placeholder={'Enter Email'} leftIcon={require('../assests/email.png')} onChangeText={(txt) => { setEmail(txt) }} />
                <CustomInput type={'password'} placeholder={'Enter Password'} leftIcon={require('../assests/lock.png')} onChangeText={(txt) => { setPassword(txt) }} />
                <CustomInput placeholder={'Contact No'} leftIcon={require('../assests/contact.png')} onChangeText={(txt) => { setContactNo(txt) }} />
                <View style={{ alignSelf: 'center', width: '80%' }}>
                    <CommonButton title={'SIGN UP'} bgcolor={'#000'} textcolor={'white'} onPress={() => onRegister()} />
                    <Text style={{ marginTop: 10, alignSelf: 'flex-end', fontSize: 18, color: 'gray', marginBottom: '5%', }}>Sign In</Text>
                </View>
            </View>
        )
    }

    return (
        <HomeScreen />
    )
}

export default SignUp

const styles = StyleSheet.create({})