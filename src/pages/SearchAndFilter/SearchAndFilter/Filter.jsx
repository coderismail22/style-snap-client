// Filter.js
import React from "react";
import { Colors } from "../Chunks/Colors";
import { Sortby } from "../Chunks/Sortby";
import PriceSlider from "../Chunks/PriceSlider";
import { Sizes } from "../Chunks/Sizes";
import { Fabrics } from "../Chunks/Fabric";
import { Brands } from "../Chunks/Brands";
import { CutFits } from "../Chunks/CutFits";

const Filter = () => {
  return (
    <div>
      {/* Existing filter dropdowns for color, size, brand, and price */}
      {/* Color */}
      <Sortby />
      <Colors />
      <Fabrics />
      <Brands />
      <Sizes />
      <CutFits />
      <PriceSlider />
    </div>
  );
};

export default Filter;
