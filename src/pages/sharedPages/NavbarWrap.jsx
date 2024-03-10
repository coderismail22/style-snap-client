import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import gif from "../../../public/style.gif";
import { Link } from "react-router-dom";
import ProductsAccordion from "../../Layout/AdminDashboard/Components/Products/ProductsAccordion";

export const NavbarWrap = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["0", "Cart", "Support", "Log Out"];

  const clickHandlerForMenu = () => {
    console.log("clickHandlerForMenu clicked");
    setIsMenuOpen(!isMenuOpen);
    // console.log("menu is", isMenuOpen);
  };
  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          // className="sm:hidden"
        />
        <NavbarBrand>
          {/* TODO: FIX REDIRECTING TO THE HOME ('/') */}
          <Link to="/" className="cursor-pointer">
            <img className="w-20 h-10" src={gif} alt="gif" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            id="default-search"
            className="block w-full p-2 ps-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            All Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" to="/cart" aria-current="page">
            <div className="mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        
     
      <div className="menu-item font-poppins">Girls</div>
      <div className="menu-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi aspernatur odio molestias impedit nihil vel vitae facere perferendis, deleniti quos?</div>
        <ProductsAccordion></ProductsAccordion>
      </NavbarMenu>
    </Navbar>
  );
};
