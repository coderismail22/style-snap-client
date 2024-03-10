// FilterContext.js
import React, { createContext, useReducer, useContext } from 'react';

const FilterContext = createContext();

const initialState = {
  color: null,
  size: null,
  brand: null,
  price: null,
  sortBy: null,
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return { ...state, color: action.payload };
    case 'SET_SIZE':
      return { ...state, size: action.payload };
    case 'SET_BRAND':
      return { ...state, brand: action.payload };
    case 'SET_PRICE':
      return { ...state, price: action.payload };
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};
