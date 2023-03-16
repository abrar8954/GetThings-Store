import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../common/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addToWishlist, removeFromCart, removeFromWishlist } from '../redux/Actions';
import { act } from 'react-test-renderer';
import CommonButton from '../common/CommonButton';

const WhishList = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers2);
  console.log('cartData', cartData);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, paddingVertical: 8 }}>

      {
        cartData.length > 0 ?
          (<FlatList data={cartData} renderItem={({ item, index }) => {

            return (
              <CartItem isWishList={'yes'} item={item} onRemoveItem={(x) => { dispatch(removeFromWishlist(index)) }} onAddToCart={(x) => { dispatch(addItemToCart(x)) }} />)

          }} />
          )
          :
          (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 17, fontWeight: '400', marginTop: 5 }}>Not Any Item is Liked.</Text>
          </View>
          )
      }

     
      {/* <CartItem/> */}
    </View>
  )
}

export default WhishList;

const styles = StyleSheet.create({})