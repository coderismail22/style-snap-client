import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home/Home";
import { NotFound } from "../pages/sharedPages/NotFound";
import { Main } from "../Layout/Main/Main";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";
import { Cart } from "../pages/Cart/Cart";
import { AdminDashboard } from "../Layout/AdminDashboard/AdminDashboard";
import { UserDashboard } from "../Layout/UserDashboard/UserDashboard";
import { Stats } from "../Layout/AdminDashboard/Components/Stats";
import { Accounts } from "../Layout/AdminDashboard/Components/Accounts";
import { Customers } from "../Layout/AdminDashboard/Components/Customers";
import { Employees } from "../Layout/AdminDashboard/Components/Employees";
import { Expenses } from "../Layout/AdminDashboard/Components/Expenses";
import { Inventory } from "../Layout/AdminDashboard/Components/Inventory";
import { Message } from "../Layout/AdminDashboard/Components/Message";
import { Products } from "../Layout/AdminDashboard/Components/Products/Products";
import { Purchases } from "../Layout/AdminDashboard/Components/Purchases";
import { Quotations } from "../Layout/AdminDashboard/Components/Quotations";
import { Reports } from "../Layout/AdminDashboard/Components/Reports";
import { Sales } from "../Layout/AdminDashboard/Components/Sales";
import { Suppliers } from "../Layout/AdminDashboard/Components/Suppliers";
import { Settings } from "../Layout/AdminDashboard/Components/Settings";
import BarcodeGenerator from "../Layout/AdminDashboard/Components/BarcodeGenerator";
import { ProductList } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/ProductList";
import { AddProducts } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/AddProducts";
import { Categories } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/Categories";
import { SubCategories } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/SubCategories";
import { Brands } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/Brands";
import { Sizes } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/Sizes";
import { Colors } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/Colors";
import { PrintBarcode } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/PrintBarcode";
import { Units } from "../Layout/AdminDashboard/Components/Products/Sub-Menu/Units";
import SearchAndFilter  from "../pages/SearchAndFilter/SearchAndFilter/SearchAndFilter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/filter",
        element: <SearchAndFilter />,
      },
    ],
  },
  {
    path: "/dashboard/admin",
    element: <AdminDashboard></AdminDashboard>,
    // element: <TestDashboard></TestDashboard>,
    children: [
      { path: "stats", element: <Stats /> },
      { path: "accounts", element: <Accounts /> },
      { path: "customers", element: <Customers /> },
      { path: "employees", element: <Employees /> },
      { path: "expenses", element: <Expenses /> },
      { path: "inventory", element: <Inventory /> },
      { path: "message", element: <Message /> },
      {
        path: "products",
        element: <Products />,
        children: [
          { path: "productlist", element: <ProductList /> },
          { path: "addproducts", element: <AddProducts /> },
          { path: "categories", element: <Categories /> },
          { path: "sub-categories", element: <SubCategories /> },
          { path: "units", element: <Units /> },
          { path: "brands", element: <Brands /> },
          { path: "sizes", element: <Sizes /> },
          { path: "colors", element: <Colors /> },
          { path: "print-barcode", element: <PrintBarcode /> },
        ],
      },
      { path: "purchases", element: <Purchases /> },
      { path: "quotation", element: <Quotations /> },
      { path: "reports", element: <Reports /> },
      { path: "sales", element: <Sales /> },
      { path: "suppliers", element: <Suppliers /> },
      { path: "settings", element: <Settings /> },
      { path: "barcode-label", element: <BarcodeGenerator /> },
    ],
  },
  {
    path: "/dashboard/user",
    element: <UserDashboard></UserDashboard>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
