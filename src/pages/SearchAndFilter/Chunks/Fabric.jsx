import React, { useState } from "react";
import { useFilter } from "../../../context/filterContext";

export const Fabrics = () => {
  const { state, dispatch } = useFilter();
  const allFabrics = ["Cotton", "Denim", "Jeans", "Wool", "Silk", "Leather"];

  const handleFabricChange = (selectedFabric) => {
    dispatch({ type: "SET_FABRIC", payload: selectedFabric });
    // Fetch and update products based on the selected fabric
  };

  return (
    <>
      {/* Fabric Selection */}
      <div>
        <h1>FABRICS:</h1>
        {/* Dropdown selection for fabrics */}
        <select
          value={state.fabric || ""}
          onChange={(e) => handleFabricChange(e.target.value)}
        >
          <option value="">Select Fabric</option>
          {allFabrics.map((fabric) => (
            <option key={fabric} value={fabric}>
              {fabric}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
