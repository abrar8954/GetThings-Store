import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsersData } from '../redux/Actions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAddress } from '../redux/Actions';
import { useStripe } from '@stripe/stripe-react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Checkout = (props) => {
  console.log('propsRedux ', props);
  const addressList = useSelector(state => state.AddressReducer);
  const dispatch = useDispatch();
  const usersData = [{ data1: props.usersData, data2: addressList }];
  const productData = props.route.params.cartData;
  console.log('productData ', productData);
  console.log('usersDataCheckout: ', usersData);
  console.log('addressList: ', addressList);
  console.log('props.usersData: ', props.usersData);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const navigation = useNavigation();

  function getTotalPrice() {
    let tempTotal = 0;
    productData.map((item) => {
      tempTotal = tempTotal + item.price;
    })
    return tempTotal;

  }

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch('https://drab-tan-coypu.cyclic.app//payment-sheet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: getTotalPrice()
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
      merchantDisplayName: "The Common Man",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: props.usersData[0].userName,
        phone: props.usersData[0].contactNo,
        email: props.usersData[0].email
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


  return (
    <View style={{ flex: 1 }}>
      {/* <ScrollView> */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 20, backgroundColor: '#fff', height: 65 }}>
        <TouchableOpacity onPress={() => { navigation.goBack()}}>
          <Image source={require('../assests/back.png')} style={{ width: 24, height: 24 }} />
        </TouchableOpacity>

        <Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 20, color: '#000' }}>Checkout</Text>
      </View>
      <View style={{ alignItems: 'center', paddingHorizontal: 15, marginTop: 10 }}>
        <FlatList data={usersData} horizontal showsHorizontalScrollIndicator={false} renderItem={({ item, index }) => {
          return (

            <View style={{ width: 380, height: 200, backgroundColor: '#fff', borderRadius: 20, paddingTop: 15, paddingLeft: 15, justifyContent: 'space-between' }}>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ fontSize: 18, fontWeight: '600' }}>Delver to:</Text>
                  <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 10 }}>{item.data1[0].userName}</Text>
                </View>


                {console.log(item.data2)}
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>{item.data2 != 0 ? item.data2[0].building + ' ' + item.data2[0].city + ' ' + item.data2[0].pin : 'Add address'}</Text>
              </View>

              <View>
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10 }}>{item.data1[0].email}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 10, marginBottom: 20 }}>{item.data1[0].contactNo}</Text>
              </View>
            </View>
          )
        }} />
      </View>

      <View style={{ alignItems: 'center', paddingHorizontal: 15, marginTop: 10 }}>
        <FlatList data={productData} showsVerticalScrollIndicator={false} renderItem={({ item, index }) => {
          return (

            <View style={{ width: 380, height: 200, backgroundColor: '#fff', paddingTop: 15, paddingLeft: 15, marginTop: 10 }}>

              <Text style={{ fontSize: 24, fontWeight: '600', color: 'blue' }}>Arcade Jackets</Text>


              <View style={{ flexDirection: 'row', marginTop: 40, }}>
                <Image source={item.image} style={{ width: 80, height: 80 }} />

                <View style={{ paddingLeft: 10 }}>
                  <Text >{item.name}</Text>
                  <View style={{ width: '65%', flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                    <Text style={{ fontSize: 18, fontWeight: '500', }}>{item.price}</Text>
                    <Text style={{ fontSize: 18, fontWeight: '900', color: '#000', }}>{'Qty: ' + item.quantity}</Text>

                  </View>
                </View>
              </View>


            </View>
          )
        }} />
      </View>
      {/* </ScrollView> */}


      <View style={{ backgroundColor: '#fff', width: '100%', height: 75, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, position: 'absolute', bottom: 0 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>Total: </Text>
          <Text style={{ fontSize: 18, fontWeight: '600', color: 'orange' }}>{getTotalPrice()}</Text>
        </View>

        <TouchableOpacity style={{ padding: 15, backgroundColor: 'orange', borderRadius: 10 }} onPress={() => { openPaymentSheet() }}>
          <Text style={{ fontSize: 18, fontWeight: '600', color: '#fff' }}>Place Order</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const mapStateToProps = (store) => ({
  usersData: store.reducer.usersData,
  productQuantity: store.reducer.productQuantity,

})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUsersData }, dispatch);
export default connect(mapStateToProps, mapDispatchProps)(Checkout)

