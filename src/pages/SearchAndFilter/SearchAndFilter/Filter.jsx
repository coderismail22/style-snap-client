// Filter.js
import React from "react";
import { useFilter } from "../../../context/filterContext";

const Filter = () => {
  const { state, dispatch } = useFilter();

  const handleSortChange = (selectedSort) => {
    console.log("sort changed", selectedSort);
    dispatch({ type: "SET_SORT", payload: selectedSort });
    // Fetch and update products based on the selected sorting option
  };

  const handlePriceChange = (e) => {
    // Handle the price change, e.g., update the price range in the state
    const selectedPrice = e.target.value;
    console.log('selectedPrice', selectedPrice);
    dispatch({ type: 'SET_PRICE', payload: selectedPrice });
  };

  return (
    <div>
      {/* Existing filter dropdowns for color, size, brand, and price */}

      <label>Sort By:</label>
      <select
        onChange={(e) => handleSortChange(e.target.value)}
        value={state.sortBy || ""}
      >
        <option value="">Default</option>
        <option value="lowToHigh">Low to High Price</option>
        <option value="highToLow">High to Low Price</option>
        {/* Add more sorting options if needed */}
      </select>

      {/* Price Slider */}
      <div>
        <label>Price Range:</label>
        {/* Add a price slider and handle its change */}
        <input
          type="range"
          min="0"
          max="10000"
          step="10"
          value={state.price || ""}
          onChange={handlePriceChange}
        />
        <span>{state.price} $</span>
      </div>
    </div>
  );
};

export default Filter;
