import React from "react";
import { Link } from "react-router-dom";
import noImage from "../utils/noimage.png";

export const RestaurantCard = (props) => {
  debugger;
  return (
    <div
      className="card flex flex-wrap gap-8 justify-center"
      data-testid="resCard"
    >
      {props.filterSearch.map((elem) => (
        <div
          key={elem.info.id}
          className="mb-4 w-[350px] bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <Link to={`/listRestaurantMenu/${elem.info.id}`}>
            <h1
              id="names"
              className="text-2xl font-bold text-center text-slate-800 py-4"
            >
              {elem.info.name}
            </h1>

            <div className="imgDiv w-full relative">
              <img
                className="w-full h-[250px] object-cover"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  elem.info.cloudinaryImageId
                }
                alt="Restaurant"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = noImage;
                }}
              />

              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full font-bold shadow-lg">
                ⭐ {elem.info.avgRating}
              </div>
            </div>
          </Link>

          <div className="p-5">
            <div className="flex justify-between items-center bg-orange-100 rounded-xl p-3 mb-3">
              <h1 className="font-bold text-orange-700">
                {elem.info.aggregatedDiscountInfoV3.header}
              </h1>

              <h1 className="font-semibold text-red-600">
                {elem.info.aggregatedDiscountInfoV3.subHeader}
              </h1>
            </div>

            <h1 className="text-gray-600 font-medium mb-2">
              📈 {elem.info.totalRatingsString}
            </h1>

            <h1 className="text-gray-700 font-semibold">
              📍 {elem.info.locality}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export const HOCRestaurantCard = (RestaurantCard) => {
  return function EnhancedHOCRestaurantCard(props) {
    return (
      <div className="relative inline-block">
        <div className="absolute top-5 left-5 z-10 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
          🥗 Veg Only
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};