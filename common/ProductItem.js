import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';
import { products } from '../screens/Product';
import { useSelector } from 'react-redux';

const ProductItem = ({ item, onAddToCart, onAddWishlist, addQuantity, quantity, reload, category }) => {
  const cartData = useSelector(state => state.Reducers);
  // console.log('cartDataPrIT ', cartData);

  // function addQty(selectedItem) {
  //   // console.log('selectedItem: ', selectedItem);
  //   // console.log('quantity: ', quantity);

  //   let productQty = 0;

  //   for (let index = 0; index < quantity.length; index++) {
  //     if (selectedItem == quantity[index].id) {
  //       productQty = quantity[index].productQuantity;
  //     }

  //   }

  //   console.log('productQty: ', productQty);

  //   return productQty;

  // }

  // function addQuantity() {
  //   var productQuantity = quantity ? addQty(item.name) + 1 : 0 + 1;

  //   var productName = item.name;

  //   firestore().collection("productQuantity")
  //     .doc(auth().currentUser.uid)
  //     .collection("productQuantity")
  //     .doc(productName)
  //     .set({
  //       productQuantity

  //     }).then(
  //       console.log('addQuantity Successfully..'),
  //       reload()
  //     )
  // }

  function addQuantity() {

    // console.log('products.category.length: ', products.category.length);
    // console.log('products.category[0].data.length: ', products.category[0].data.length);

    for (let i = 0; i < products.category.length; i++) {
      // console.log('category: ', category);
      // console.log('products.category[i].category: ', products.category[i].category);
      if (products.category[i].category != category) {
        continue;
      }

      let len = products.category[i].data.length;
      for (let j = 0; j < len; j++) {

        // console.log('item.name: ', item.name);
        // console.log('products.category[i].data[j].name: ', products.category[i].data[j].name);
        // console.log('item.nameproducts.category[i].data[j].name != item.name: ', products.category[i].data[j].name != item.name);

        if ((products.category[i].data[j].name) != (item.name)) {
          continue;
        }

        // console.log('products.category[i].data[j].quantityBefore: ', products.category[i].data[i].quantity);
        products.category[i].data[j].quantity = products.category[i].data[j].quantity + 1;
        // console.log('products.category[i].data[i].quantityAfter: ', products.category[i].data[j].quantity);
        break;
      }
    }

  }


  function checkCartData() {
    // for (let index = 0; index < cartData.length; index++) {

    //   console.log('cartData[index].name: ', cartData[index].name);
    //   console.log('item.name: ', item.name);
    //   console.log('(cartData[index].name) == item.name: ', (cartData[index].name) == item.name);


    //   if ((cartData[index].name) == item.name) {
    //     break;
    //   }
    //   console.log('Check..');
    //   onAddToCart(item)


    // }

    const alreadyExists = cartData.some(itm => itm.name === item.name);

    if (!alreadyExists) {
      onAddToCart(item);
    }

  }

  return (
    <View style={{ width: 200, height: 200, borderRadius: 10, elevation: 5, backgroundColor: '#fff', marginBottom: 10, marginLeft: 20 }}>
      <Image source={item.image} style={{ width: '100%', height: '50%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10, }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.gender}</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 10, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, fontWeight: '800' }}>Rs {item.price}</Text>
        <TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }} onPress={() => {
          // console.log('cartDataCheck: ', cartData);
          // cartData.length == 0 ? onAddToCart(item) : checkCartData()
          checkCartData()
          // addQuantity()
        }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>Add To Cart</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, elevation: 5, position: 'absolute', top: 10, right: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => { onAddWishlist(item) }}>
        <Image source={require('../assests/heart.png')} style={{ width: 24, height: 24, }} />
      </TouchableOpacity>
    </View>
  )
}


export default ProductItem

