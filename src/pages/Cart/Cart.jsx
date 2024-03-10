import React from "react";
import { useCart } from "../../context/cartContext";
import { Button, Image } from "@nextui-org/react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

export const Cart = () => {
  const { cartState, decreaseQuantity, increaseQuantity } = useCart();
  const cart = cartState.cart;

  const handleDecreaseQuantity = (productId) => {
    console.log("handleDecreaseClicked");
    decreaseQuantity(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    console.log("handleIncreaseClicked");
    increaseQuantity(productId);
  };

  // const calculateTotal = () => {
  //   return cart.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  // };

  return (
    <div>
      <div className="cart-container">
        <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>
        {cartState.cart.length > 0 ? (
          <div gap={2}>
            {cart.map((item) => (
              <div key={item.product.id} xs={24}>
                <div className="flex items-center border-b border-gray-300 pb-4 mb-4">
                  <Image
                    src={item.product.img}
                    alt={item.product.name}
                    width={80}
                    height={80}
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-bold">{item.product.name}</h3>
                    <p className="text-gray-600">
                      Price: ${item.product.price}
                    </p>
                    <div className="flex items-center mt-2">
                      <Button
                        color="primary"
                        variant="text"
                        onClick={() => handleDecreaseQuantity(item.product._id)}
                        disabled={item.quantity === 1}
                      >
                        <FaMinus />
                        {/* Show Quantity Dynamically */}
                      </Button>
                      <span className="mx-2">{item.quantity}</span>

                      <Button
                        color="primary"
                        variant="text"
                        onClick={() => handleIncreaseQuantity(item.product._id)}
                      >
                        <FaPlus />
                      </Button>
                    </div>
                  </div>
                  <Button
                    color="error"
                    endContent={<FaTrash />}
                    // onClick={() => removeFromCart(item.product.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <div xs={24}>
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-xl font-bold">
                  {/* Total: ${calculateTotal()} */}
                </h3>
                <Button color="primary">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};
