import React, { createContext, useReducer } from 'react';

// Initial state of the cart
const initialState = {
  cartItems: [],
};

// Cart reducer to handle different cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the product is already in the cart
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingProductIndex >= 0) {
        // Update the quantity of the existing product
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCartItems };
      }

      // Add new product to the cart
      return { ...state, cartItems: [...state.cartItems, { ...action.payload }] };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload._id),
      };

    case 'UPDATE_QUANTITY':
      const updatedCart = state.cartItems.map((item) =>
        item._id === action.payload._id ? { ...item, quantity: action.payload.quantity } : item
      );
      return { ...state, cartItems: updatedCart };

    case 'CLEAR_CART':
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
