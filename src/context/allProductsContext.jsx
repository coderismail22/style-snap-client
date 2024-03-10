import React, { createContext, useEffect } from "react";
import allproductsReducer from "../reducers/allproductsReducer";
const AllProductsContext = createContext();
const AllProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(allproductsReducer, {
    loading: true,
    allProducts: [],
    error: "",
  });
  console.log(data);
  useEffect(() => {
    const fetchAllProducts = async () => {
      // try {
      //     const res =
      // } catch (error) {
      // }
    };
  });

  return (
    <AllProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </AllProductsContext.Provider>
  );
};
console.log("🚀 ~ AllProductsProvider ~ data:", data);

const useAllProducts = () => {
  return useContext(AllProductsContext);
};

export { AllProductsProvider, useAllProducts };
