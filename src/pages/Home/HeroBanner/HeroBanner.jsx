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
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000

    // responsive: [
    //   {
    //     breakpoint: 1536,
    //     settings: {
    //       slidesToShow: 6,
    //     },
    //   },
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       slidesToShow: 5,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    // ],
  };

  return (
    <div className="slider-container p-2 ">
      <Slider {...settings}>
        <div className="mx-5">
          <img src="/images/bannerImages/hero_banner_1.png" alt="bannerImg" />
        </div>
        <div className="mx-5">
          <img src="/images/bannerImages/hero_banner_3.jpg" alt="bannerImg" />
        </div>
        <div className="mx-5">
          <img src="/images/bannerImages/hero_banner_2.png" alt="bannerImg" />
        </div>
      </Slider>
    </div>
  );
}

//*Autoplay Carousel End

export const HeroBanner = () => {
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
