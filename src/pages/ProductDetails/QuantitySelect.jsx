import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useCart } from "../../context/cartContext";

export const QuantitySelect = () => {
  const [amount, setAmount] = useState(1);
  const {decreaseQuantity,increaseQuantity} = useCart()
  const stock = 10;

  return (
    <div>
      {/* toggle */}
      <div className="my-5 flex flex-col justify-center items-center">
        <div className="flex gap-5 items-center">
          <button
            className="bg-slate-200 p-2 hover:bg-slate-300 ease-in duration-200"
            onClick={() => setDecrease()}
          >
            <FaMinus />
          </button>
          <div className="w-10">
            <h1>{amount}</h1>
          </div>
          <button
            className="bg-slate-200 p-2 hover:bg-slate-300 ease-in duration-200"
            onClick={() => setIncrease()}
          >
            <FaPlus />
          </button>
        </div>
        <div className="mt-2">
          <h1>
            {"["} Only <span className="font-bold text-orange-500">{stock}</span>{" "}
            Items Left{" "} 
            {"]"}
          </h1>
        </div>
      </div>
    </div>
  );
};
