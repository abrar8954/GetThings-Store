import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from '../screens/Product';


const CartItem = ({ item, onRemoveItem, isWishList, onAddToCart, onAddWishlist, quantity, category, reload }) => {




  function addQuantity() {
    console.log('hi');
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



  //This is for 1 quantity decrement (for future)

  function removeQuantity() {

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
        products.category[i].data[j].quantity = products.category[i].data[j].quantity - 1;
        // console.log('products.category[i].data[i].quantityAfter: ', products.category[i].data[j].quantity);
        break;
      }
    }

  }


  return (
    <View style={{ width: '90%', height: 260, borderRadius: 10, elevation: 5, backgroundColor: '#fff', marginBottom: 10, marginLeft: 20 }}>
      <Image source={item.image} style={{ width: '100%', height: '60%', borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10, }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.gender}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
          <TouchableOpacity onPress={() => { 
            addQuantity()
            reload()
           }}>
            <Image source={require('../assests/add.png')} style={{ width: 32, height: 32, }} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => { 
            removeQuantity()
            reload()
           }}>
            <Image source={require('../assests/remove.png')} style={{ width: 20, height: 20, }} />
          </TouchableOpacity>

          <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.quantity}</Text>
        </View>

      </View>
      <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 10, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 18, fontWeight: '800' }}>Rs {item.price}</Text>
        {isWishList ? (<TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }} onPress={() => { onAddToCart(item) }}>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>Add To Cart</Text>
        </TouchableOpacity>)
          :
          (<TouchableOpacity style={{ borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }} onPress={() => {
            onRemoveItem()
            // removeQuantity()
          }}>

            <Text style={{ fontSize: 16, fontWeight: '500' }}>Remove Item</Text>
          </TouchableOpacity>)}

      </View>
      
      <Text style={{ fontSize: 22, fontWeight: '800', color: 'blue', position: 'absolute', marginLeft: 20, marginTop: 10  }}>{item.name}</Text>
      {isWishList ? (
        <TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, elevation: 5, position: 'absolute', top: 10, right: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => { onRemoveItem() }}>
          <Image source={require('../assests/heartF.png')} style={{ width: 24, height: 24, }} />
        </TouchableOpacity>
      )
        :
        (<TouchableOpacity style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 20, elevation: 5, position: 'absolute', top: 10, right: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => { onAddWishlist(item) }}>
          <Image source={require('../assests/heart.png')} style={{ width: 24, height: 24, }} />
        </TouchableOpacity>)}

    </View>
  )
}

export default CartItem;

const styles = StyleSheet.create({})