import React from "react";
import { useFilter } from "../../../context/filterContext";

export const Sortby = () => {
  const { state, dispatch } = useFilter();

  // Sort
  const handleSortChange = (selectedSort) => {
    console.log("sort changed", selectedSort);
    dispatch({ type: "SET_SORT", payload: selectedSort });
    // Fetch and update products based on the selected sorting option
  };
  return (
    <div>
      <label>SORT BY:</label>
      <select
        onChange={(e) => handleSortChange(e.target.value)}
        value={state.sortBy || ""}
      >
        <option value="">Default</option>
        <option value="lowToHigh">Low to High Price</option>
        <option value="highToLow">High to Low Price</option>
        {/* Add more sorting options if needed */}
      </select>
    </div>
  );
};
