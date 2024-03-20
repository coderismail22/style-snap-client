import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import GenericSlider from "../../../compoChunks/GenericSlider/GenericSlider";

export const DynamicCategoryPage = () => {
  const { category } = useParams();
  const categoryProducts = [
    {
      _id: "65da1c1e602d7777dd09f2ce",
      discountPrice: 300,
      basePrice: 700,
      discountPercent: 20,
      size: "M",
      colors: "Black",
      images: [
        "https://www.aarong.com/media/catalog/category/Men-New_Arrivals-eid-220220224.png",
      ],
      brand: "UrbanDenim",
      rating: 4.3,
      comment:
        "Urban-style black denim jeans, perfect for a sleek and modern outfit.",
      productName: "Jacket",
      category: "men",
      fabrics: ["cotton", "denim"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: [
        "https://www.aarong.com/media/catalog/category/Men-Panjabi-Shopbycategory-EID1-220224.png",
      ],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: ["https://www.aarong.com/media/catalog/category/3.-PP-set.jpg"],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: ["https://www.aarong.com/media/catalog/category/4.-coaty.jpg"],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: [
        "https://www.aarong.com/media/catalog/category/5.-short-kurta.jpg",
      ],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: ["https://www.aarong.com/media/catalog/category/6.-Shirts.jpg"],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: ["https://www.aarong.com/media/catalog/category/7.-Fatua.jpg"],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: ["https://www.aarong.com/media/catalog/category/8.-Tee.jpg"],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: ["https://www.aarong.com/media/catalog/category/9.-polo.jpg"],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: [
        "https://www.aarong.com/media/catalog/category/sbc-Men-Shoes-04022024.jpg",
      ],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
    {
      _id: "65da1c1e602d7777dd09f2e3",
      discountPrice: 250,
      basePrice: 700,
      discountPercent: 20,
      sizes: ["xl"],
      images: [
        "https://www.aarong.com/media/catalog/category/6-sbc-men-wallets-falgun24-29012024.jpg",
      ],
      brand: "apex",
      rating: 4.5,
      comment:
        "Classic dark blue denim jeans for a sophisticated and polished appearance.",
      productName: "Saree",
      category: "men",
      trendingScore: 2,
      color: "red",
      fabrics: ["cotton", "jeans"],
      cutfits: ["regularfit", "slimfit", "frontopen"],
    },
  ];

  const trendingProducts = [
    {
      _id: "65da1c1e602d7777dd09f2ce",
      images: [
        "https://www.aarong.com/media/catalog/product/0/1/0120000034222.jpg",
      ],
      category: "men",
    },
    {
      _id: "65da1c1e602d7777dd09f2ce",
      images: [
        "https://www.aarong.com/media/catalog/product/0/0/0030000132204.jpg",
      ],
      category: "men",
    },
    {
      _id: "65da1c1e602d7777dd09f2ce",
      images: [
        "https://www.aarong.com/media/catalog/product/0/8/0870000106374.jpg",
      ],
      category: "men",
    },
    {
      _id: "65da1c1e602d7777dd09f2ce",
      images: [
        "https://www.aarong.com/media/catalog/product/0/0/0030000129935.jpg",
      ],
      category: "men",
    },
    {
      _id: "65da1c1e602d7777dd09f2ce",
      images: [
        "https://www.aarong.com/media/catalog/product/0/8/0870000106690.jpg",
      ],
      category: "men",
    },
    {
      _id: "65da1c1e602d7777dd09f2ce",
      images: [
        "https://www.aarong.com/media/catalog/product/0/0/0060000146110.jpg",
      ],
      category: "men",
    },
    {
      _id: "65da1c1e602d7777dd09f2ce",
      images: [
        "https://www.aarong.com/media/catalog/product/0/0/0040000101021.jpg",
      ],
      category: "men",
    },
    {
      _id: "65da1c1e602d7777dd09f2ce",
      images: [
        "https://www.aarong.com/media/catalog/product/0/1/0110000093981.jpg",
      ],
      category: "men",
    },
  ];
  const isLoading = false;
  console.log("🚀 ~ DynamicCategoryPage ~ category:", category); //MEN-WOMEN-KIDS
  // Fetch OK
  // Document Structure ???
  // Show Dynamic Category ???

  //-----------------------------------------------------
  //1. DYNAMIC COVER IMAGE [Idea: if (category === "men"){setImg(menImg)}] [STATIC OK]
  //2. CATEGORY WISE SHOP CARDS [Fatua => Filter_Category_Page] [STATIC OK]
  //3. TRENDING [STATIC OK]
  //4. DYNAMIC FILTER_CATEGORY AND TRENDING IMPLEMENTATION
  //-----------------------------------------------------

  // Slider
  const navigate = useNavigate();
  const onClickHandler = (id) => {
    console.log("Got Hit NewArrival", id);
    navigate(`/products/${id}`);
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className="text-5xl absolute top-1/2 transform -translate-y-1/2 right-[-35px] cursor-pointer text-gray-300 pl-3"
        onClick={onClick}
      >
        <IoIosArrowRoundForward />
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className="text-5xl absolute z-10 top-1/2 transform -translate-y-1/2 left-[-35px] cursor-pointer text-gray-300"
        onClick={onClick}
      >
        <IoIosArrowRoundBack />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      {/* Dynamic Name & Image */}

      <div className="relative w-screen flex justify-center">
        <h1 className="text-center font-bold text-4xl  text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {category.toUpperCase()}
        </h1>

        <img
          className=" overflow-hidden"
          src="https://images.pexels.com/photos/2675678/pexels-photo-2675678.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="img"
        />
      </div>

      {/* Shop By Category */}
      <div>
        {isLoading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            {/* SHOP BY CATEGORY */}
            <h1 className="text-center font-bold text-4xl mt-5">
              SHOP BY CATEGORY
              <div>
                <GenericSlider
                  settings={settings}
                  data={categoryProducts}
                  section={"category"}
                  onItemClick={onClickHandler}
                ></GenericSlider>
              </div>
            </h1>
            {/* SHOP BY TRENDING */}
            <h1 className="text-center font-bold text-4xl mt-5">
              TRENDING
              <div>
                <GenericSlider
                  data={trendingProducts}
                  section={"trending"}
                  onItemClick={onClickHandler}
                ></GenericSlider>
              </div>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
