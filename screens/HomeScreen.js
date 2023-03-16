import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import Search from './Search';
import Cart from './Cart';
import Profile from './Profile';
import Whishlist from './Whishlist';
import MainScreen from './MainScreen';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { reload } from '../redux/Actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const HomeScreen = (props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector(state => state);

  useEffect(() => {
    props.reload();
    // console.log(props.reload);
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (<MainScreen />) : selectedTab == 1 ? (<Search />) : selectedTab == 2 ? (<Cart />) : selectedTab == 3 ? (<Whishlist />) : (<Profile />)}

      <View style={{ width: '100%', position: 'absolute', backgroundColor: '#fff', height: 70, bottom: 0, flexDirection: 'row', alignItems: 'center', }}>

        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => { setSelectedTab(0); }}>
          <Image source={require('../assests/home.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 0 ? 'purple' : '#000' }} />
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => { setSelectedTab(1); }}>
          <Image source={require('../assests/search.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 1 ? 'purple' : '#000' }} />
        </TouchableOpacity>


        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity style={{ width: 44, height: 44, backgroundColor: selectedTab == 2 ? 'purple' : '#000', borderRadius: 22, justifyContent: 'center', alignItems: 'center', }} onPress={() => { setSelectedTab(2); }}>
            <Image source={require('../assests/cart.png')} style={{ width: 24, height: 24, }} />
            <View style={{ width: 14, height: 14, backgroundColor: 'red', borderRadius: 7, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 5, right: 5, }}><Text style={{ color: 'white' }}>{data.Reducers.length}</Text></View>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => { setSelectedTab(3); }}>
          <Image source={require('../assests/heart.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 3 ? 'purple' : '#000' }} />
          <View style={{ width: 14, height: 14, backgroundColor: 'red', borderRadius: 7, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 15, right: 20 }}><Text style={{ color: 'white' }}>{data.Reducers2.length}</Text></View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} onPress={() => { setSelectedTab(4); }}>
          <Image source={require('../assests/user.png')} style={{ width: 24, height: 24, tintColor: selectedTab == 4 ? 'purple' : '#000' }} />
        </TouchableOpacity>

      </View>
    </View>
  )
}

const mapStateToProps = (store) => ({
  usersData: store.reducer.usersData,
  
})

const mapDispatchProps = (dispatch) => bindActionCreators({ reload }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(HomeScreen);

