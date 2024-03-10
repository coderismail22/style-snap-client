import React from "react";
import boys from "/public/images/boys.png";
import girls from "/public/images/girls.png";

export const BoysAndGirls = () => {
  return (
    <div>
      <div className="my-5 text-xl md:text-2xl lg:text-4xl underline text-center font-extrabold text-purple-700 dark:text-gray-300">
        Boy's & Girl's Collection
      </div>

      <div className="flex flex-col gap-5 items-center justify-center md:flex-row">
        <div className="border w-full h-full ">
          <img src={boys} alt="boysImg" />
        </div>
        <div className="border w-full h-full">
          <img src={girls} alt="girlsImg" />
        </div>
      </div>
    </div>
  );
};
