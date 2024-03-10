import React, { useEffect, useState } from "react";
import { WishlistButton } from "../../compoChunks/WishlistButton/WishlistButton";
import { InfinitySpin } from "react-loader-spinner";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { ColorSelect } from "./ColorSelect";
import { SizeSelect } from "./SizeSelect";
import { QuantitySelect } from "./QuantitySelect";
// import { useCart } from "../../context/cartContext";
import { Button } from "@nextui-org/react";
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../../context/cartContext";
import { StarRating } from "../../compoChunks/StarRating/StarRating";
import { DetailsTabs } from "./DetailsTabs";

export const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartState, addToCart } = useCart();

  const handleAddToCart = () => {
    // TODO: MAKE (PRODUCT,QUANTITY,COLOR) COME FROM API DYNAMICALLY

    // TODO:
    //! 1. Take Single Data
    //! 2. Take User Custom Choice Data
    //! 3. Send To The Global Context

    const product = {
      id: 2,
      name: "Example Product",
      img: "https://static-01.daraz.com.bd/p/83c706d7a84db738555c9e254d311b8a.jpg_300x0q75.webp",
      price: 500,
    };
    const quantity = 2;
    const color = "blue";

    // Using addToCart function to add the product to the cart
    addToCart(product, quantity, color);
    console.log("added product");
    navigate("/cart");
  };

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const bdtSymbol = "\u09F3";

  // Destructuring Product Details
  const {
    productName,
    discountPrice,
    discountPercent,
    basePrice,
    size,
    colors,
    images,
    brand,
    rating,
    comment,
  } = product || {};
  console.log("SingleProductName", productName);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        // TODO: LOAD SINGLE DATA DYNAMICALLY
        const res = await fetch(`http://localhost:5000/allProducts/${id}`);
        const data = await res.json();
        console.log("singleFetchData", data);
        setProduct(data);
        // Set Single Data Object
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleProduct();
  }, [id]);

  useEffect(() => {
    // Set the initial selected image when the product data is available
    if (product && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div className="container mx-auto p-2 max-w-5xl">
          This is product : {id}
          <>
            <div>
              {/* Product Image Gallery*/}
              <div className="grid grid-cols-1 md:grid-cols-12 items-center">
                {/* Image Gallery */}
                <div className=" md:col-span-5 h-full flex flex-col justify-center ">
                  {/* Main Image */}
                  <img
                    src={selectedImage}
                    alt="Main"
                    className="w-full transition-opacity duration-1000 ease-in-out opacity-100 hover:scale-110"
                  />

                  {/* Thumbnail Gallery */}
                  <div className="md:w-full">
                    <div className="mt-5 overflow-x-scroll scrollbar flex">
                      {product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Thumbnail ${index}`}
                          className="w-1/4 cursor-pointer mx-1"
                          onClick={() => handleThumbnailClick(image)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="text-center mt-5 lg:text-2xl grid md:col-span-7">
                  {/* Product Title */}
                  <h2 className="text-2xl font-bold mb-1">{productName}</h2>

                  {/* Rating */}
                  <div className="flex items-center justify-center mb-1">
                    <StarRating ratingVal={rating}></StarRating>
                  </div>

                  {/* Price */}
                  <p className="text-2xl font-bold mb-1 text-orange-500">
                    {bdtSymbol} {discountPrice}
                  </p>
                  <p className="text-xl mb-1">
                    <span className="line-through mr-2 text-slate-400">
                      {bdtSymbol} {basePrice}
                    </span>
                    <span className="font-semibold text-slate-500">
                      -{discountPercent}%
                    </span>
                  </p>

                  {/* Stock Availability */}
                  <p className="text-green-500 mb-1">In Stock</p>

                  {/* Color Select */}
                  <ColorSelect></ColorSelect>

                  {/* Size Select */}
                  <SizeSelect></SizeSelect>

                  {/* Quantity Select */}
                  {/* <QuantitySelect></QuantitySelect> */}

                  <div className="flex gap-4 justify-center items-center">
                    {/* Add to Cart Button */}
                    <div className="flex gap-4 items-center">
                      {/* Add to Cart */}
                      <Button
                        className="w-full text-xl bold"
                        color="primary"
                        onClick={() => handleAddToCart()}
                        endContent={<FaCartShopping />}
                      >
                        Add to Cart
                      </Button>
                    </div>
                    {/* Favorite Button */}
                    <WishlistButton> </WishlistButton>
                  </div>
                </div>
                {/* Tabs Here */}
                {/* <DetailsTabs></DetailsTabs> */}
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
};
