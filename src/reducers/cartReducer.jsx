const cartReducer = (state, action) => {
  console.log("cartReducer state is", state);

  //TODO: Learn what is "STATE"
  //! 1. "state" is an object
  //! 2. "state" has an array named : "Cart"
  //! 3. This "Cart" conains all the items.
  //! 4. Each of the items is an object

  //TODO: Learn what is "ACTION"
  //! 1. "action" is an object
  //! 2. "action" has "type" and "payload"
  //! 3. "type" format: "type":  "stringValue"
  //! 4. "payload" format: payload: {data1,data2,data3....}

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload], // action.payload = {product,quantity,color}
      };

    // TODO: LEARN THE FLOW (handleIncreaseQuantity)
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          console.log("what is item in the cart array", item);
          return item.product._id === action.payload.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
      };

    case "DECREASE_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.product._id === action.payload.productId
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
