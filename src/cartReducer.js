// cartReducer.js
const initialState = {
    cart: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        const existingItemIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        if (existingItemIndex !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[existingItemIndex].quantity += 1;
          return { ...state, cart: updatedCart };
        } else {
          const newItem = {
            ...action.payload,
            quantity: 1,
          };
          return { ...state, cart: [...state.cart, newItem] };
        }
      case "REMOVE_FROM_CART":
        const updatedCart = state.cart.filter(
          (item) => item.id !== action.payload
        );
        return { ...state, cart: updatedCart };
      case "INCREASE_QUANTITY":
        const increasedCart = state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: increasedCart };
      case "DECREASE_QUANTITY":
        const decreasedCart = state.cart.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return { ...state, cart: decreasedCart };
      default:
        return state;
    }
  };
  
  export default cartReducer;
  