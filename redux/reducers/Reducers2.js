import { removeFromWishlist } from "../Actions";
import { ADD_TO_CART, REMOVE_FROM_CART, ADD_TO_WHISHLIST, REMOVE_FROM_WHISHLIST } from "../ActionType";


export default Reducers2 = (state = [], action) => {
    switch (action.type) {

        case ADD_TO_WHISHLIST:
            return [...state, action.payload]


        case REMOVE_FROM_WHISHLIST:
            const deletedArray2 = state.filter((item, index) => {
                console.log('hi bro inside');
                return index !== action.payload;
            })
            console.log('hi bro inside');
            return deletedArray2;

        default:
            return state;
    }
}

