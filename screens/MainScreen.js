import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import { products } from './Product'
import ProductItem from '../common/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart, addToWishlist, reload } from '../redux/Actions'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { connect } from 'react-redux'

const MainScreen = (props) => {
  const items = useSelector(state => state);
  const [categoryList, setCategoryList] = useState([]);
  const [tshirtList, setTShirtList] = useState([]);
  const [jacketList, setJacketList] = useState([]);
  const [shoesList, setShoesList] = useState([]);
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.Reducers);
  // console.log('cartDataMain: ', cartData);

  useEffect(() => {
    console.log(products);
    let tempCategory = [];
    products.category.map(item => {
      tempCategory.push(item);
    })
    setCategoryList(tempCategory);
    setTShirtList(products.category[0].data);
    setJacketList(products.category[1].data);
    setShoesList(products.category[2].data);
  }, [])

  // console.log('selector: ', items);
  // console.log('props.productQuantity: ', props.productQuantity);



  return (

    <View style={{ flex: 1, }}>

      <Header title={'GetThings Store'} isIcon={true} right={require('../assests/profile.png')} />
      <ScrollView style={{ flex: 1, }}>
        <Image source={require('../assests/banner.jpg')} style={{ width: '94%', height: 200, borderRadius: 10, marginTop: 10, alignSelf: 'center' }} />
        <View style={{ marginTop: 20 }}>
          <FlatList data={categoryList} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={{ padding: 10, borderWidth: 1, marginLeft: 20, borderRadius: 20, }}>
                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600' }}>{item.category}</Text>
              </TouchableOpacity>
            )
          }} />
        </View>
        <Text style={{ marginTop: 20, marginLeft: 20 }}>New T Shirts</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={tshirtList} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
            return (
              <ProductItem category={products.category[0].category} quantity={props.productQuantity} reload={() => { dispatch(reload()) }} item={item} onAddToCart={(x) => { dispatch(addItemToCart(item)) }} onAddWishlist={() => { dispatch(addToWishlist(item)) }} />
            )
          }} />
        </View>

        <Text style={{ marginTop: 20, marginLeft: 20 }}>New Jackets</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={jacketList} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
            return (
              <ProductItem item={item} onAddToCart={(x) => { dispatch(addItemToCart(item)) }} onAddWishlist={() => { dispatch(addToWishlist(item)) }} />
            )
          }} />
        </View>

        <Text style={{ marginTop: 20, marginLeft: 20 }}>New Shoes</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList data={shoesList} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
            return (
              <ProductItem item={item} onAddToCart={(x) => { dispatch(addItemToCart(item)) }} onAddWishlist={() => { dispatch(addToWishlist(item)) }} />
            )
          }} />
        </View>
      </ScrollView>


    </View>
  )
}
const mapStateToProps = (store) => ({
  productQuantity: store.reducer.productsQty,

})
export default connect(mapStateToProps)(MainScreen)

