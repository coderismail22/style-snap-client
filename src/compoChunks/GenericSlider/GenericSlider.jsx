// GenericSlider.jsx
import React from "react";
import Slider from "react-slick";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const GenericSlider = ({ data, onItemClick, section }) => {
  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
        className="text-5xl absolute top-1/2 transform -translate-y-1/2 right-[-35px] cursor-pointer text-gray-300 pl-3"
        onClick={onClick}
      >
        {section === "category" ? (
          <IoIosArrowForward />
        ) : (
          <IoIosArrowRoundForward />
        )}
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
        {section === "category" ? <IoIosArrowBack /> : <IoIosArrowRoundBack />}
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
    <div className="slider-container p-8 ">
      {section === "category" && (
        <Slider {...settings}>
          {data.map((product) => (
            <div
              className={`grid gap-5 cursor-pointer max-w-80 w-3 ${
                section === "category" ? "p-2" : ""
              }`}
              key={product.id}
            >
              <div onClick={() => onItemClick(product._id)}>
                <img src={product.images[0]} alt="productImg" />
                <hr className="mt-2" />
                <hr />
                <hr />
                <p className="text-left mt-1  text-gray-600 py-1 font-bold uppercase text-lg">
                  {product.category}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      )}
      {section === "trending" && (
        <Slider {...settings}>
          {data.map((product) => (
            <div
              className={`grid gap-5 cursor-pointer max-w-80 w-3 ${
                section === "category" ? "p-2" : ""
              }`}
              key={product.id}
            >
              <div onClick={() => onItemClick(product._id)}>
                <img src={product.images[0]} alt="productImg" />
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default GenericSlider;
