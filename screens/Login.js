import { StyleSheet, Text, View, Image, TextInput, Touchable, TouchableHighlight, TouchableOpacity } from 'react-native'
import React from 'react'
import CommonButton from '../common/CommonButton'
import CustomInput from '../common/CustomInput'
import { useNavigation } from '@react-navigation/native'
import { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import HomeScreen from './HomeScreen'

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
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


    function signIn() {
        auth().signInWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('Signed In with:', user.email);
                navigation.navigate('Home');
            })
            .catch((err) => {
                console.warn( "Something went wrong", err);
            })
    }
    if (!user) {
        return (
            <View style={{ flex: 1 }}>
                <Image source={require('../assests/cart.png')} style={{ width: 60, height: 60, alignSelf: 'center', marginTop: '25%' }} />
                <Text style={{ marginTop: 50, alignSelf: 'center', fontSize: 24, fontWeight: '600', color: '#000' }}>Login</Text>
                <CustomInput placeholder={'Enter Email'} leftIcon={require('../assests/email.png')} onChangeText={(txt) => { setEmail(txt) }} />
                <CustomInput type={'password'} placeholder={'Enter Password'} leftIcon={require('../assests/lock.png')} onChangeText={(txt) => { setPassword(txt) }} />
                <CommonButton title={'SIGN IN'} bgcolor={'#000'} textcolor={'white'} widthCBT={'80%'} alignselfCBT={'center'} onPress={() => { signIn(); navigation.navigate('Home') }} />
                {/* <TouchableOpacity onPress={() => console.warn('Hi there')} > */}
                <Text style={{ marginTop: 50, alignSelf: 'center', fontSize: 18, color: 'gray' }} onPress={() => navigation.navigate('SignUp')}>Create Account!</Text>
                {/* </TouchableOpacity> */}

            </View>
        )
    }
    return (
        <HomeScreen />
    )

}

export default Login

const styles = StyleSheet.create({})