const allproductsReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCTS_FETCHED":
      return {
        loading: false,
        allProducts: [],
        error: "",
      };

    case "ALL_PRODUCTS_FETCH_ERROR":
      return {
        loading: false,
        allProducts: [],
        error: "Failed To Fetch All Products ",
      };
  }
};

export default allproductsReducer;
