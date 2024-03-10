import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { CartProvider } from "./context/cartContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <FilterProvider>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </FilterProvider>
    </CartProvider>
  </React.StrictMode>
);
