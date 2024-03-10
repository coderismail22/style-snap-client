import React, { useEffect, useRef, useState } from "react";
import { FaBackward, FaBars, FaHome } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./AdminDashboard.css";

//Icons Importing
import { IoStatsChartSharp } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { ImBarcode } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbZoomMoney } from "react-icons/tb";
import { LuPackageOpen } from "react-icons/lu";
import { BiMessageDetail } from "react-icons/bi";
import { TbPackages } from "react-icons/tb";
import { RiLuggageCartLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";
import { FaUsersRectangle } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdQueryStats } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { MdBarcodeReader } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import ProductsAccordion from "./Components/Products/ProductsAccordion";

export const AdminDashboard = () => {
  //Example SKU Data
  const [skuList, setSkuList] = useState(["SKU_01", "SKU_02", "SKU_03"]);

  //Sub Menu Functions
  // const defaultContent = "Hello";

  return (
    <>
      {/* My Dashboard Start */}
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle " />
        <div className="drawer-content">
          {/*TODO: Navbar */}
          <div className="flex justify-center items-center">
            <div className="w-20">
              <label
                htmlFor="my-drawer"
                className="drawer-Link m-4  flex justify-center"
              >
                <FaBars></FaBars>
              </label>
            </div>
            <nav>
              <ul className="list-none hidden md:flex flex-wrap gap-5 items-center justify-center">
                <li className="flex gap-1 justify-center items-center">
                  <RiArrowRightDoubleFill />
                  <h1 className="font-bold text-xl ">Quick Links :</h1>
                </li>
                <li className="flex gap-1 items-center  justify-center bg-red p-1 rounded font-bold text-white">
                  <FaMoneyCheckDollar className="text-xl " />
                  <Link>Sales Report</Link>
                </li>
                <li className="flex gap-1 items-center  justify-center bg-green-500 p-1 rounded font-bold text-white">
                  <LuPackageOpen />

                  <Link>Stock</Link>
                </li>
                <li className="flex gap-1 items-center  justify-center bg-blue p-1 rounded font-bold text-white">
                  <MdQueryStats />

                  <Link>Today's Summary</Link>
                </li>
                <li className="flex gap-1 items-center  justify-center bg-amber-700 p-1 rounded font-bold text-white">
                  <IoBagHandle />

                  <Link>Return Orders</Link>
                </li>
                <li className="flex gap-1 items-center  justify-center bg-green-500 p-1 rounded font-bold text-white">
                  <MdBarcodeReader />

                  <Link>POS</Link>
                </li>
                <li className="flex gap-1 items-center  justify-center bg-violet-500 p-1 rounded font-bold text-white">
                  <FaCartPlus />

                  <Link>Order</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Outlet></Outlet>
        </div>
        <div className="drawer-side" id="sidebar">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="h-screen overflow-auto p-4 w-[230px] bg-white text-black flex flex-col ">
            <ul>
              {/* Stats */}
              <li className="mt-2 hover:bg-slate-200 rounded duration-500 border p-1 ">
                <NavLink
                  to="/dashboard/admin/stats"
                  className="flex text-xl gap-2"
                >
                  <IoStatsChartSharp className="mt-[3px]" />
                  Stats
                </NavLink>
              </li>
              {/* Accounts */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/accounts">
                  <FaMoneyCheckDollar />
                  Accounts
                </NavLink>
              </li>
              {/* Barcode & Label */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/barcode-label">
                  <ImBarcode />
                  Barcode & Label
                </NavLink>
              </li>
              {/* Customers */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/customers">
                  <FaUsers />
                  Customers
                </NavLink>
              </li>
              {/* Employees */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/employees">
                  <RiCustomerService2Fill />
                  Employees
                </NavLink>
              </li>
              {/* Expenses */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/expenses">
                  {" "}
                  <TbZoomMoney />
                  Expenses
                </NavLink>
              </li>
              {/* Inventory */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/inventory">
                  <LuPackageOpen />
                  Inventory
                </NavLink>
              </li>
              {/* Message */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/message">
                  <BiMessageDetail />
                  Message
                </NavLink>
              </li>
              {/* Products Expanded*/}
              <li className="mt-2">
                <ProductsAccordion></ProductsAccordion>
              </li>
              {/* Purchases */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/purchases">
                  <RiLuggageCartLine />
                  Purchases
                </NavLink>
              </li>
              {/* Quotation */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/quotation">
                  <FaBook />
                  Quotation
                </NavLink>
              </li>
              {/* Reports */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/reports">
                  <FaFilePdf />
                  Reports
                </NavLink>
              </li>
              {/* Sales */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/sales">
                  <BsCartCheck />
                  Sales
                </NavLink>
              </li>
              {/* Suppliers */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/suppliers">
                  <FaUsersRectangle />
                  Suppliers
                </NavLink>
              </li>
              {/* Settings */}
              <li className="mt-2 hover:bg-slate-500 rounded duration-500">
                <NavLink to="/dashboard/admin/settings">
                  <IoMdSettings />
                  Settings
                </NavLink>
              </li>
            </ul>

            <ul>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaBackward></FaBackward>Back to Main Page
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* My Dashboard End */}
      {/* Pass SKU data to BarcodeGenerator */}
      {/* <BarcodeGenerator skuList={skuList} /> */}
    </>
  );
};
