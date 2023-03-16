
import { FETCH_USERS_DATA, FETCH_PRODUCTS_QTY } from "../ActionType";


const initialState = {
    usersData: [],
    productsQty: []
}

export default FirebaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_DATA:
            return {
                ...state,
                usersData: action.usersData
            }
            case FETCH_PRODUCTS_QTY:
                return {
                    ...state,
                    productsQty: action.productsQty
                }
        default:
            return state;
    }
}
