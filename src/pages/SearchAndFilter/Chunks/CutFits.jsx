import React, { useState } from "react";
import { useFilter } from "../../../context/filterContext";

export const CutFits = () => {
  const { state, dispatch } = useFilter();
  // Color:
  const cutFits = ["Slim Fit", "Regular Fit", "Classic Fit", "Front Open"];

  const handleCutFitChange = (selectedCutfit) => {
    dispatch({ type: "SET_CUTFIT", payload: selectedCutfit });
  };
  return (
    <>
      {/* CutFit Selection*/}
      <div>
        <h1>CUT/FIT</h1>
        {/* Dropdown selection for cutfit */}
        <select
          value={state.cutfit || ""}
          onChange={(e) => handleCutFitChange(e.target.value)}
        >
          <option value="">Select Color</option>
          {cutFits.map((cutfit) => (
            <option key={cutfit} value={cutfit}>
              {cutfit}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
