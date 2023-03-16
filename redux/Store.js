import { createStore } from "redux";
import Reducers from "./reducers/Reducers";
import Reducers2 from "./reducers/Reducers2";
import AddressReducer from "./reducers/AddressReducer";
import FirebaseReducer from "./reducers/FirebaseReducer";
import { applyMiddleware,} from 'redux';
import thunk from 'redux-thunk';

import { combineReducers } from "redux";
const rootReducer = combineReducers({ Reducers, Reducers2, AddressReducer, reducer: FirebaseReducer })
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;