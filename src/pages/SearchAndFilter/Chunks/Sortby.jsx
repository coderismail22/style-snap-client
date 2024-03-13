import React from "react";
import { useFilter } from "../../../context/filterContext";

export const Sortby = () => {
  const { state, dispatch } = useFilter();

  const sortingOptions = ["Low To High", "High To Low"];
  // Sort
  const handleSortChange = (selectedSort) => {
    console.log("sort changed", selectedSort);
    dispatch({ type: "SET_SORT", payload: selectedSort });
    // Fetch and update products based on the selected sorting option
  };

  return (
    <div>
      <h1>SORT BY:</h1>
      <select
        value={state.sortby || ""}
        onChange={(e) => handleSortChange(e.target.value)}
      >
        <option value="">Sort</option>
        {sortingOptions.map((sortVal) => (
          <option key={sortVal} value={sortVal}>
            {sortVal}
          </option>
        ))}
      </select>
    </div>
  );
};
