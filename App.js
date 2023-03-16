

import React, { startTransition } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/Store';
import HomeScreen from './screens/HomeScreen';
import AddAddress from './screens/AddAddress';
import MyAddress from './screens/MyAddress';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/Profile';
import { StripeProvider } from '@stripe/stripe-react-native';
import GalleryCameraModal from './screens/GalleryCameraModal';
import Checkout from './screens/Checkout';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import SplashScreen from './screens/SplashScreen';
import { useEffect } from 'react';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => { setSplashScreen(false) }, 3000)
  }, [])


  if (splashScreen) {
    return (
      <SplashScreen />
    )
  }


  return (

    <Provider store={store}>
      <StripeProvider publishableKey="pk_test_51MSiMCLutRiIN166MnCfrWJPJSxxK5PhrLHKSYh6WaTKV4oiIm2myQGPluomaofSMkxg1d4J9u2k0iMXefh0RnV600Dds5Mgo3">
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} options={{}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{}} />
            <Stack.Screen name="Home" component={HomeScreen} options={{}} />
            <Stack.Screen name="AddAddress" component={AddAddress} />
            <Stack.Screen name="Profile" component={Profile} options={{}} />
            <Stack.Screen name="MyAddress" component={MyAddress} options={{}} />
            {/* <Stack.Screen name="InternshipTask4" component={InternshipTask4} options={{}} /> */}
            <Stack.Screen name="GalleryCameraModal" component={GalleryCameraModal} options={{}} />
            <Stack.Screen name="Checkout" component={Checkout} options={{}} />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>

      {/* <HomeScreen /> */}
    </Provider>
  );
};


export default App;
