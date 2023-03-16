import { removeFromWishlist } from "../Actions";
import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WHISHLIST, REMOVE_FROM_WHISHLIST } from "../ActionType";


export default Reducers = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return ( console.log("jjj"),
                [...state, action.payload])


        case REMOVE_FROM_CART:
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

