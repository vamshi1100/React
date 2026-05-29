import React from "react";
import { Link } from "react-router-dom";
import noImage from "../utils/noimage.png";

export const RestaurantCard = (props) => {
  debugger;
  return (
    <div className="card flex flex-wrap gap-5 w-[450px] justify-between">
      {props.filterSearch.map((elem) => (
        <div key={elem.info.id} className="mb-10 border-4 border-amber-300 p-2">
          <Link to={`/listRestaurantMenu/${elem.info.id}`}>
            <h1 id="names">{elem.info.name}</h1>
          </Link>

          <div className="imgDiv w-[400px] relative">
            <img
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

            <div className="badge">
              <h1>{elem.info.avgRating}</h1>
            </div>
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
        <div className="absolute top-[125px] left-[57px] z-10 bg-black text-white p-2">
          Veg Only
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
