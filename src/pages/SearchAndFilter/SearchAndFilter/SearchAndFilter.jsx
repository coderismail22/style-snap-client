// ProductList.js
import React, { useEffect, useState } from "react";
import { useFilter } from "../../../context/filterContext";
import Filter from "./Filter";

const SearchAndFilter = () => {
  const { state } = useFilter();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log("let's check state",state)
    // Fetch products based on filter and sorting criteria
    // Example: fetch(`/api/products?color=${state.color}&size=${state.size}&sortBy=${state.sortBy}`)
    //   .then((response) => response.json())
    //   .then((data) => setFilteredProducts(data));
  }, [state]);

  return (
    <div>
      <div>
        <h1>Filter Dropdown</h1>
        <Filter></Filter>
      </div>
      <h2>Filtered Products</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAndFilter;
