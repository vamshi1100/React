import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { swigggyApi } from "../utils/constants";
import noImage from "../utils/noimage.png";
import { Link } from "react-router-dom";
import useOnlineOffline from './../utils/useOnlineOffline';

let SwiggyComponentBody = () => {
  let [ResCardsData, setResCardsData] = useState([]);
  let [searchVal, setSearchVal] = useState("");
  let [filterSearch, setFiltersearch] = useState([]);
  let onlinestatus = useOnlineOffline();

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
      setFiltersearch(restaurantsdata);
      setResCardsData(restaurantsdata);
    };
    fetchData();
  }, []);

  if (!ResCardsData || ResCardsData.length === 0) {
    return <ShimmerUI />;
  }

  return (
    <>
      <div className="flex sm:justify-start md:justify-center lg:justify-end">
        <button
          onClick={() => {
            let ResCards = ResCardsData.filter((elem) => {
              return elem.info.avgRating > 4.3;
            });
            console.log(ResCards);
            setFiltersearch(ResCards);
          }}
        >
          Filter
        </button>
        <div className="ml-2">
          <input className="border-2 border-black"
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
           className="ml-2 uppercase " 
          >
            search
          </button>        
        </div>
        <button>{onlinestatus == "online" ? "💚" : "❤️"}</button>
      </div>
      <div className="card"> 
        {
        filterSearch.map((elem) => (
          <div  key={elem.info.id} className="mb-10 border-5 border-amber-300" >
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
              <div className="badge"><h1>{elem.info.avgRating}</h1></div>
            </div>
                   
          </div>
        ))}
      </div>
    </>
  );
};

export default SwiggyComponentBody;
