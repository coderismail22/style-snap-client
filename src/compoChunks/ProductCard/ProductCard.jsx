import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";
import { StarRating } from "../StarRating/StarRating";
import { Link, useNavigate } from "react-router-dom";

export const ProductCard = ({ product }) => {
  const {
    _id,
    productName,
    basePrice,
    discountPrice,
    discountPercent,
    color,
    size,
    brand,
    images,
    rating,
    comment,
  } = product;
  console.log("i am testing", product);
  const bdtSymbol = "\u09F3";

  const navigate = useNavigate();
  const handleOnClick = () => {
    console.log("Got Hit");
    navigate(`/products/${_id}`);
  };

  return (
    <div onClick={handleOnClick}>
      <Card className="w-44 md:w-48 cursor-pointer">
        <Image
          alt="Card background"
          className="object-cover rounded-xl p-2 hover:scale-110"
          src={images}
          width={270}
        />
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large break-words">
            {productName}
            {" ("}
            {size}
            {")"}
          </h4>
          <h1 className="text-orange-500 bold text-xl">
            {bdtSymbol}
            {discountPrice}
          </h1>
          <small className="text-default-500 ">
            <span className="line-through">
              {bdtSymbol}
              {basePrice}
            </span>{" "}
            -{discountPercent}%
          </small>
          <StarRating ratingVal={rating}></StarRating>
        </CardHeader>
      </Card>
    </div>
  );
};
