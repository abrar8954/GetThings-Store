import { removeFromWishlist } from "../Actions";
import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WHISHLIST, REMOVE_FROM_WHISHLIST, ADD_ADDRESS, REMOVE_ADDRESS } from "../ActionType";


export default AddressReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return ( console.log("jjj"),
                [...state, action.payload])


        case REMOVE_ADDRESS:
            const deletedArray1 = state.filter((item, index) => {
                console.log('hi bro inside');
                return index !== action.payload;
            })
            console.log('hi bro outside');
            return deletedArray1;

        default:
            return state;
    }
}

