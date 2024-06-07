import React, { createContext, useReducer, useContext } from 'react';

export const CartContext = createContext();

const initState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItemIndex = state.cartItems.findIndex(
        item => item.id === action.payload.id && item.size === action.payload.size && item.type === action.payload.type 
        && item.title === action.payload.title
      );
      if (existingItemIndex >= 0) {
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item
        );
        //...state để bảo lưu state cũ
        return { ...state, cartItems: updatedCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    case 'REMOVE_ITEM':
        const preCart = [...state.cartItems]
        preCart.splice(action.payload,1)  
        return { ...state, cartItems: preCart };
    case 'CLEAR_CART':
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  const removeItem =(index) =>{
    dispatch({type: 'REMOVE_ITEM', payload: index });
  }
  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, clearCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

// Sử dụng ngữ cảnh giỏ hàng

