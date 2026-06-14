import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { swigggyApi } from "../utils/constants";
import noImage from "../utils/noimage.png";
import { Link } from "react-router-dom";
import { RestaurantCard, HOCRestaurantCard } from "./RestaurantCard";

let SwiggyComponentBody = () => {
  let [ResCardsData, setResCardsData] = useState([]);
  let [searchVal, setSearchVal] = useState("");
  let [filterSearch, setFiltersearch] = useState([]);
  // HOC Component
  const PromotedRestaurantCard = HOCRestaurantCard(RestaurantCard);

  useEffect(() => {
    let fetchData = async () => {
      const data = await fetch(swigggyApi);
      const json = await data.json();
      let restaurantsdata =
        json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // let restaurantsdata =
      //   json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants;
      // console.log(restaurantsdata);
      setFiltersearch(restaurantsdata);
      setResCardsData(restaurantsdata);
    };
    fetchData();
  }, []);

  if (!ResCardsData || ResCardsData.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 px-6 py-8">
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8 bg-white shadow-xl rounded-2xl p-6">
        <button
          data-testid="filterToprated"
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          onClick={() => {
            let ResCards = ResCardsData.filter((elem) => {
              return elem.info.avgRating > 4.3;
            });
            //console.log(ResCards);
            setFiltersearch(ResCards);
          }}
        >
          ⭐ Top Rated
        </button>

        <div className="flex items-center">
          <input
            className="border-2 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            type="text"
            data-testid="searchInput"
            value={searchVal}
            onChange={(e) => {
              // console.log(e.target.value);
              setSearchVal(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //console.log(searchVal);
              let filterSearchVal = ResCardsData.filter((elem) => {
                return elem.info.name.includes(searchVal);
              });
              setFiltersearch(filterSearchVal);
            }}
            className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl uppercase font-semibold shadow-lg hover:scale-105 transition-all duration-300"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {/* {filterSearch.map((elem) => {
          return elem?.info?.veg ? (
            <PromotedRestaurantCard filterSearch={[elem]} />
          ) : (
            <RestaurantCard filterSearch={[elem]} />
          );
          //console.log(elem);
        })} */}

        {filterSearch.map((elem) =>
          elem?.info?.veg ? (
            <PromotedRestaurantCard key={elem.info.id} filterSearch={[elem]} />
          ) : (
            <RestaurantCard key={elem.info.id} filterSearch={[elem]} />
          ),
        )}
      </div>
    </div>
  );
};

export default SwiggyComponentBody;
