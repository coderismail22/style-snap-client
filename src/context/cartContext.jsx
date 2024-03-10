import React, { createContext, useContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cartState is an object
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });
console.log('cartContext',cartState)
  const addToCart = (product, quantity, color) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
        quantity,
        color,
      },
    });
  };



  // TODO: LEARN THE FLOW (handleIncreaseQuantity)
  const increaseQuantity = (productId) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: {
        productId,
      },
    });
  };

  const decreaseQuantity = (productId) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: {
        productId,
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext); // Context : cartState, addToCart, updateQuantity, increaseQuantity
  if (!context) {
    throw new Error("There was an error !");
    
  }
  return context; // Context : cartState, addToCart, updateQuantity, increaseQuantity
};

export { CartProvider, useCart };
