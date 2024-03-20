// ProductList.js
import React, { useEffect, useState } from "react";
import { useFilter } from "../../../context/filterContext";
import Filter from "./Filter";
import { ProductCard } from "../../../compoChunks/ProductCard/ProductCard";

const SearchAndFilter = () => {
  const { state } = useFilter();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const [minPrice, maxPrice] = state.priceRange ?? [0, 1000];
    console.log("check state", state);

    // Format sorting option
    const formattedSort = state.sortby
      ? state.sortby.replace(/\s+/g, "").toLowerCase()
      : "";
    // Format sorting option
    const formattedCutfits = state.cutfit
      ? state.cutfit.replace(/\s+/g, "").toLowerCase()
      : "";

    // Prepare filter parameters with default empty strings if they are null or undefined
    const filterParams = {
      fabrics: state.fabric || "",
      colors: state.color || "",
      brands: state.brand || "",
      sizes: state.size || "",
      sortby: formattedSort || "",
      cutfits: formattedCutfits || "",
      pricerange: `${minPrice}-${maxPrice}`,
    };

    // Remove empty filter parameters
    console.log("without Object.entries", filterParams);
    const checkfilteredParams = Object.entries(filterParams);
    console.log(
      "checking filteredparams with object entries",
      checkfilteredParams
    );
    console.log(
      "checking filteredparams with object entries,filter",
      checkfilteredParams.filter(([key, value]) => value !== "")
    );
    console.log(
      "checking filteredparams with object entries,filter and map",
      checkfilteredParams
        .filter(([key, value]) => value !== "")
        .map(([key, value]) => `${key}=${value}`)
    );
    console.log(
      "checking filteredparams with object entries,filter, map and join",
      checkfilteredParams
        .filter(([key, value]) => value !== "")
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    );
    const filteredParams = Object.entries(filterParams)
      .filter(([key, value]) => value !== "")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    // Construct the final URL
    const url = `http://localhost:5000/filteredproducts?${filteredParams}`;
    console.log("final url", url);

    // Fetch filtered products
    const fetchFilteredProducts = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    };

    fetchFilteredProducts();
  }, [state]);

  return (
    <div className="flex justify-center gap-5 border border-green-500">
      {/* Filter Options */}
      <div>
        <h1>Filter Dropdown</h1>
        <Filter></Filter>
      </div>
      {/* Filtered Products */}
      <div>
        <h2>Filtered Products: {filteredProducts.length}</h2>

        {filteredProducts.map((product) => (
          <ProductCard product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SearchAndFilter;
