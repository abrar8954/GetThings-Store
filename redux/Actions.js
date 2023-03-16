import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WHISHLIST, REMOVE_FROM_WHISHLIST, ADD_ADDRESS, REMOVE_ADDRESS, FETCH_USERS_DATA, FETCH_PRODUCTS_QTY } from "./ActionType";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data
})

export const removeFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index
})


export const addToWishlist = data => ({
    type: ADD_TO_WHISHLIST,
    payload: data
})

export const removeFromWishlist = index => ({
    type: REMOVE_FROM_WHISHLIST,
    payload: index
})

export const addAddress = data => ({
    type: ADD_ADDRESS,
    payload: data
})

export const deleteAddress = index => ({
    type: REMOVE_ADDRESS,
    payload: index
})
export function reload() {
    return ((dispatch) => {
        dispatch(fetchUsersData())
        dispatch(fetchProductQty())
    })
}

export function fetchUsersData() {
    return ((dispatch) => {
        // console.log('fetchUsersData');

        firestore()
            .collection("users")
            .get()
            .then((snapshot) => {

                let usersData = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                })
                // console.log('usersData', usersData);
                dispatch({ type: FETCH_USERS_DATA, usersData })
            })
    })
}
export function fetchProductQty() {
    return ((dispatch) => {
        // console.log('fetchproductQuantity');
        try {
            firestore()
                .collection("productQuantity")
                .doc(auth().currentUser.uid)
                .collection("productQuantity")
                .get()
                .then((snapshot) => {

                    let productsQty = snapshot.docs.map(doc => {
                        const data = doc.data();
                        const id = doc.id;
                        return { id, ...data }
                    })
                    // console.log('productsQty ', productsQty);
                    dispatch({ type: FETCH_PRODUCTS_QTY, productsQty })
                })
        } catch (error) {

        }

    })
}