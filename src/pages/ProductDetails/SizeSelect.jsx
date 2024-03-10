import React, { useState } from "react";

export const SizeSelect = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const sizeOptions = ["S", "M", "L", "XL", "2XL"];
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };
  return (
    <>
      <div className="mb-4">
        <p className="text-gray-600 font-semibold mb-2">Pick Size:</p>
        <div className="flex space-x-2 justify-center items-center text-xl">
          {sizeOptions.map((size, index) => (
            <button
              key={index}
              className={`w-12 h-12 p-1 rounded-full border-3  border-green-200 ease-in duration-300 hover:bg-primary-100 ${
                selectedSize === size ? "bg-primary-100 border-green-500 text-blue-700" : null
              }`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
