/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HomeScreen from './screens/HomeScreen';
import Header from './common/Header';
import MainScreen from './screens/MainScreen';
import ScContentList from './screens/ScContentList';
import CustomInput from './common/CustomInput';
import AddAddress from './screens/AddAddress';
import GalleryCameraModal from './screens/GalleryCameraModal';
import SignUp from './screens/SignUp';
import SplashScreen from './screens/SplashScreen';

import {name as appName} from './app.json';
import Checkout from './screens/Checkout';

AppRegistry.registerComponent(appName, () => App);
