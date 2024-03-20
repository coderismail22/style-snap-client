import React from "react";
import { Link } from "react-router-dom";

export const CategoryWiseShopping = () => {
  return (
    <div className="mt-5 flex gap-4 items-center justify-center">
      <Link to="category/men" className="border border-red-500">
        Men
      </Link>
      <Link to="category/women" className="border border-red-500">
        Women
      </Link>
      <Link to="category/boys" className="border border-red-500">
        Boys
      </Link>
      <Link to="category/girls" className="border border-red-500">
        Girls
      </Link>
    </div>
  );
};
