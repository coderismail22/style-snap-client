import React from "react";
import { useFilter } from "../../../context/filterContext";

export const Brands = () => {
  const { state, dispatch } = useFilter();
  const allBrands = ["Apex", "Lotto", "Bata"];

  const handleBrandChange = (selectedBrand) => {
    dispatch({ type: "SET_BRAND", payload: selectedBrand });
    // Fetch and update products based on the selected brand
  };

  return (
    <>
      {/* Brand Selection */}
      <div>
        <h1>BRANDS:</h1>
        {/* Dropdown selection for fabrics */}
        <select
          value={state.brand || ""}
          onChange={(e) => handleBrandChange(e.target.value)}
        >
          <option value="">Select Fabric</option>
          {allBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
