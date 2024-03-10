import React, { useState } from "react";
import { BiStats } from "react-icons/bi";
import { TbPackages } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "./ProductsAccordion.css";

// Icons Import

const ProductsAccordion = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="border pr-1 pt-1  rounded ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full mb-2"
      >
        {/* <BiStats /> */}
        <div
          className={`flex gap-2 items-center justify-center ${
            accordionOpen ? " text-blue-500 font-bold text-2xl" : "bg-white"
          }`}
        >
          <TbPackages />
          <span className="text-sm">Products</span>
        </div>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden ">
          <div className="flex flex-col gap-2 justify-center ">
            <NavLink to="/dashboard/admin/products/productlist">
              Products List
            </NavLink>
            <NavLink to="/dashboard/admin/products/addproducts">
              Add Products
            </NavLink>
            <NavLink to="/dashboard/admin/products/units">Units</NavLink>
            <NavLink to="/dashboard/admin/products/categories">
              Categories
            </NavLink>
            <NavLink to="/dashboard/admin/products/sub-categories">
              Sub Categories
            </NavLink>
            <NavLink to="/dashboard/admin/products/brands">Brands</NavLink>
            <NavLink to="/dashboard/admin/products/sizes">Sizes</NavLink>
            <NavLink to="/dashboard/admin/products/colors">Colors</NavLink>
            <NavLink to="/dashboard/admin/products/print-barcode">
              Print Barcode
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAccordion;
