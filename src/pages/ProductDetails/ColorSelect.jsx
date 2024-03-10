import React, { useState } from "react";

export const ColorSelect = () => {
  
  // TODO: MAKE COLORS DYNAMIC FROM API
  const colors = ["red", "orange", "green", "black"];

  const [selectedColor, setSelectedColor] = useState("red");

  const handleColorSelect = (color) => {
    console.log("handleSelectColor", color);
    setSelectedColor(color);
  };

  return (
    <div className="mb-4">
      <p className="text-gray-600 font-semibold mb-2">Choose Color:</p>
      <div className="flex space-x-2 justify-center items-center ">
        {colors.map((curColor, index) => (
          <button
            key={index}
            onClick={() => handleColorSelect(curColor)}
            style={{ backgroundColor: curColor }}
            className={`w-10 h-10 rounded-full border-5  ease-in duration-300 hover:border-green-200  ${
              selectedColor === curColor ? `border-green-200` : `border-white`
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
