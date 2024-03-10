import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
const bdtSymbol = "\u09F3";

//*Autoplay Carousel Start
function AutoPlay({ trendingProducts }) {
  const navigate = useNavigate();
  const onClickHandler = (id) => {
    console.log("Got Hit NewArrival", id);
    navigate(`/products/${id}`);
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    // rtl:true,
    ltr: true,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
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
    <div className="slider-container p-2 ">
      <Slider {...settings}>
        {trendingProducts.map((product) => (
          <div className="p-2 grid gap-5 cursor-pointer" key={product.id}>
            <div onClick={() => onClickHandler(product._id)}>
              <img src={product.images[0]} alt="productImg" />
              <hr className="mt-2" />
              <hr />
              <hr />
              <p className="text-left mt-3  text-gray-600 py-1 font-semibold uppercase">
                {product.category}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

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
//*Autoplay Carousel End

export const Trending = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/trending");
        const data = await res.json();
        setTrendingProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log("There was an error fetching, trending product");
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchTrendingProducts();
  }, []);

  return (
    <div>
      <div className="py-5 underline text-xl md:text-2xl lg:text-4xl text-center font-extrabold text-purple-700 dark:text-gray-300">
        Trending Products
      </div>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          {trendingProducts.length}
          <AutoPlay trendingProducts={trendingProducts}></AutoPlay>
        </div>
      )}
    </div>
  );
};
