// Filter.js
import React from "react";
import { Colors } from "../Chunks/Colors";
import { Sortby } from "../Chunks/Sortby";
import PriceSlider from "../Chunks/PriceSlider";
import { SizesFilter } from "../Chunks/SizesFilter";
import { Fabrics } from "../Chunks/Fabric";
import { Brands } from "../Chunks/Brands";
import { CutFits } from "../Chunks/CutFits";

const Filter = () => {
  return (
    <div>
      <Sortby />
      <Colors />
      <Fabrics />
      <Brands />
      <SizesFilter />
      <CutFits />
      <PriceSlider />
      {/* TODO: Implement Category Wise Filter */}
    </div>
  );
};

export default Filter;
