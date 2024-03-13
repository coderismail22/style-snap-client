import React, { useState } from "react";
import { useFilter } from "../../../context/filterContext";

export const Sizes = () => {
  const { state, dispatch } = useFilter();
  const allSizes = ["28", "30", "32", "XL", "2XL", "3XL", "4XL"];

  const handleSizeChange = (selectedSize) => {
    dispatch({ type: "SET_SIZE", payload: selectedSize });
    // Fetch and update products based on the selected size
  };

  return (
    <>
      {/* Size Selection*/}
      <div>
        <h1>SIZE:</h1>
        {/* Dropdown selection for sizes */}
        <select
          value={state.size || ""}
          onChange={(e) => handleSizeChange(e.target.value)}
        >
          <option value="">Select Size</option>
          {allSizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
