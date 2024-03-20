import React from "react";
import { AllProducts } from "../AllProducts/AllProducts";
import { NewArrivals } from "../NewArrivals/NewArrivals";
import { Trending } from "../Trending/Trending";
import { BoysAndGirls } from "../BoysAndGirls/BoysAndGirls";
import { HeroBanner } from "../HeroBanner/HeroBanner";
import { SeasonalBanner } from "../SeasonalBanner/SeasonalBanner";
import SearchAndFilter from "../../SearchAndFilter/SearchAndFilter/SearchAndFilter";
import { CategoryWiseShopping } from "../CategoryWiseShopping/CategoryWiseShopping";

export const Home = () => {
  return (
    <div>
      {/* <AllProducts></AllProducts> */}
      {/* <HeroBanner></HeroBanner> */}
      {/* <Trending></Trending> */}
      {/* <NewArrivals></NewArrivals> */}
      {/* <SeasonalBanner></SeasonalBanner> */}
      {/* <BoysAndGirls></BoysAndGirls> */}
      {/* <SearchAndFilter></SearchAndFilter> */}
      {/* Experimental Categorywise Shopping */}
      <CategoryWiseShopping />
    </div>
  );
};
