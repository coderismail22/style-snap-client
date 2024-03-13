import React, { useState } from "react";
import { useFilter } from "../../../context/filterContext";

export const Colors = () => {
  const { state, dispatch } = useFilter();
  const allColors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "Purple",
    "Pink",
    "Brown",
    "Gray",
    "Black",
    "White",
    "Teal",
  ];

  const handleColorChange = (selectedColor) => {
    dispatch({ type: "SET_COLOR", payload: selectedColor });
    // Fetch and update products based on the selected color
  };
  return (
    <>
      {/* Color Selection*/}
      <div>
        <h1>COLORS:</h1>
        {/* Dropdown selection for colors */}
        <select
          value={state.color || ""}
          onChange={(e) => handleColorChange(e.target.value)}
        >
          <option value="">Select Color</option>
          {allColors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
