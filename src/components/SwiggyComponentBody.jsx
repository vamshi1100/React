import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { swigggyApi } from "../utils/constants";
import noImage from "../utils/noimage.png";
import { Link } from "react-router-dom";

let SwiggyComponentBody = () => {
  let [ResCardsData, setResCardsData] = useState([]);
  let [searchVal, setSearchVal] = useState("");
  let [filterSearch, setFiltersearch] = useState([]);
  useEffect(() => {
    debugger;
    let fetchData = async () => {
      const data = await fetch(swigggyApi);
      const json = await data.json();
      debugger;
      let restaurantsdata =
        json.data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // let restaurantsdata =
      //   json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants;
      setResCardsData(restaurantsdata);
      setFiltersearch(restaurantsdata);
    };
    fetchData();
  }, []);

  if (!ResCardsData || ResCardsData.length === 0) {
    return <ShimmerUI />;
  }

  debugger;
  return (
    <>
      <div className="btnContainer">
        <button
          onClick={() => {
            let ResCards = ResCardsData.filter((elem) => {
              return elem.info.avgRating > 4.3;
            });
            console.log(ResCards);
            setResCardsData(ResCards);
          }}
        >
          Filter
        </button>
        <div id="search">
          <input
            type="text"
            value={searchVal}
            onChange={(e) => {
              // console.log(e.target.value);
              setSearchVal(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchVal);
              let filterSearchVal = ResCardsData.filter((elem) => {
                return elem.info.name.includes(searchVal);
              });
              setFiltersearch(filterSearchVal);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="SwiggyComponentContainer">
        {filterSearch.map((elem) => (
          <div id="swiggycomponentdiv" key={elem.info.id} className="child">
            <Link to={`/listRestaurantMenu/${elem.info.id}`}>
              <h1 id="names">{elem.info.name}</h1>
            </Link>
            <div className="imgDiv">
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
            </div>

            <h1>{elem.info.avgRating}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default SwiggyComponentBody;
