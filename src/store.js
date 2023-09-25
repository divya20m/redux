// store.js
import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer'; // Import your cart reducer here

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
