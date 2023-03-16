import { StyleSheet, Text, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../common/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromCart, reload } from '../redux/Actions';
import CommonButton from '../common/CommonButton';
// import RazorpayCheckout from 'react-native-razorpay';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'
import { products } from './Product';

const Cart = (props) => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  // const [clientSecret, setClientSecret] = useState(false);
  // console.log('cartData', cartData);
  // console.log('props.productQuantityCart: ', props.productQuantity);
  // console.log('cartData[0].price', cartData[0].price);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const fetchPaymentSheetParams = async () => {
    const response = await fetch('https://drab-tan-coypu.cyclic.app//payment-sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: cartData[0].price
      })
    });
    
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    // setClientSecret(paymentIntent);
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      publishableKey,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: 'Jane Doe',
        phone: '03118577341',
        email: 'abrarsardar565@gmail.com'
      }
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    console.warn('hi blue');
    const { error } = await presentPaymentSheet(/*{ clientSecret }*/);

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  };

  useEffect(() => {
    console.log('jkjkj');
    initializePaymentSheet();
  }, []);

  return (
    <View style={{ flex: 1, paddingVertical: 8 }}>
      {
        cartData.length > 0 ?
          (<FlatList data={cartData} renderItem={({ item, index }) => {

            return (
              <CartItem reload={() => { dispatch(reload()) }} category={products.category[0].category} quantity={props.productQuantity} item={item} onRemoveItem={(x) => { dispatch(removeFromCart(index)) }} onAddWishlist={() => { dispatch(addToWishlist(item)) }} />)

          }} />)
          :
          (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 17, fontWeight: '400', marginTop: 5 }}>Not Any Item Added in Cart.</Text>
          </View>
          )
      }

      {cartData.length > 0 ?
        <TouchableOpacity style={{
          width: '90%', height: 60, backgroundColor: 'blue', marginTop: 40, borderRadius: 10, justifyContent: 'center', alignItems: 'center',
          alignSelf: 'center', position: 'absolute', bottom: 80
        }} onPress={/*openPaymentSheet*/ () => navigation.navigate('Checkout', {cartData})}>
          <Text style={{ color: '#fff', fontSize: 17, fontWeight: '600' }}>Checkout</Text>
        </TouchableOpacity>
        : null}
      {/* <CartItem/> */}
    </View>

  )
}


const mapStateToProps = (store) => ({
  productQuantity: store.reducer.productsQty,

})

export default connect(mapStateToProps)(Cart);
