import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const bdtSymbol = "\u09F3";

//* Slider Dynamic Start

const ResponsiveSlider = ({ products }) => {
  const navigate = useNavigate();
  const onClickHandler = (id) => {
    console.log("Got Hit NewArrival", id);
    navigate(`/products/${id}`);
  };
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 7,
    speed: 800,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
    ],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="slider-container p-2 mb-5">
      <Slider {...settings}>
        {products.map((product) => (
          <div className="p-2 grid gap-5 cursor-pointer" key={product.id}>
            <div onClick={() => onClickHandler(product._id)}>
              <img src={product.images[0]} alt="productImg" />
              <hr className="mt-2" />
              <hr />
              <hr />
              <p className="text-left mt-3  text-gray-600 py-1 font-semibold uppercase">
                {product.productName}
              </p>
              <p className="text-left mt-[-3px]">
                <span className="text-xl">{bdtSymbol}</span>{" "}
                {product.discountPrice}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className="text-2xl absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer bg-white bg-opacity-75 border border-gray-300 rounded-full p-2"
      onClick={onClick}
    >
      <FaAngleRight />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className="text-2xl absolute z-10 top-1/2 transform -translate-y-1/2 left-4 cursor-pointer bg-white bg-opacity-75 border border-gray-300 rounded-full p-2"
      onClick={onClick}
    >
      <FaAngleLeft />
    </div>
  );
};
//* Slider Dynamic End

//* New Arrival Section Start

export const NewArrivals = () => {
  const [activeBtn, setActiveBtn] = useState("men");
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async (specificCategory = "") => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/products/${specificCategory}`
      );
      const data = await res.json();
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchProducts(activeBtn);
  }, [activeBtn]);

  const activeBtnHandler = (specificButton) => {
    console.log("got button", specificButton);
    setActiveBtn(specificButton);
    // Dynamic Fetching
    fetchProducts(specificButton);
  };

  return (
    <>
      <div>
        <div className="text-xl md:text-2xl lg:text-4xl underline text-center font-extrabold text-purple-700 dark:text-gray-300">
          New Arrivals
        </div>

        <div className="mt-10 flex gap-3 items-center justify-center flex-wrap">
          <button
            to="#"
            //TODO: Handle Dark Mode Here
            className={`border rounded-full px-3 py-1 font-semibold uppercase  ${
              activeBtn === "men"
                ? "bg-pink-500  text-white dark:text-white"
                : "bg-white"
            }`}
            onClick={() => activeBtnHandler("men")}
          >
            Men {activeBtn === "men" ? `(${filteredProducts.length})` : ""}
          </button>
          <button
            to="#"
            className={`border rounded-full px-3 py-1 font-semibold uppercase  ${
              activeBtn === "women"
                ? "bg-pink-500  text-white dark:text-white"
                : "bg-white"
            }`}
            onClick={() => activeBtnHandler("women")}
          >
            Women {activeBtn === "women" ? `(${filteredProducts.length})` : ""}
          </button>
          <button
            to="#"
            className={`border rounded-full px-3 py-1 font-semibold uppercase  ${
              activeBtn === "newborn"
                ? "bg-pink-500  text-white dark:text-white"
                : "bg-white"
            }`}
            onClick={() => activeBtnHandler("newborn")}
          >
            New Born{" "}
            {activeBtn === "newborn" ? `(${filteredProducts.length})` : ""}
          </button>
          <button
            to="#"
            className={`border rounded-full px-3 py-1 font-semibold uppercase  ${
              activeBtn === "girls"
                ? "bg-pink-500  text-white dark:text-white"
                : "bg-white"
            }`}
            onClick={() => activeBtnHandler("girls")}
          >
            Girl's Collection{" "}
            {activeBtn === "girls" ? `(${filteredProducts.length})` : ""}
          </button>
          <button
            to="#"
            className={`border rounded-full px-3 py-1 font-semibold uppercase  ${
              activeBtn === "boys"
                ? "bg-pink-500  text-white dark:text-white"
                : "bg-white"
            }`}
            onClick={() => activeBtnHandler("boys")}
          >
            Boy's Collection{" "}
            {activeBtn === "boys" ? `(${filteredProducts.length})` : ""}
          </button>
        </div>
        <>
          {loading ? (
            <div className="grid items-center justify-center mt-5">
              <RotatingLines
                visible={true}
                height="50"
                width="50"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <div>
              {/* <h1 className="font-bold text-center text-2xl">New Arrivals</h1>
               */}

              <h1 className="text-center">{filteredProducts.length}</h1>
              <ResponsiveSlider products={filteredProducts} />
            </div>
          )}
        </>
      </div>
    </>
  );
};
//* New Arrival Section End
