import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import usefetchResData from "../utils/usefetchResData";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
export default function RestaurantMenu(props) {
  let { resId } = useParams();
  let resInfo = usefetchResData(resId);
  let [showItems, setShowItems] = useState(0);

  let refInfoData = resInfo?.data?.cards[2]?.card?.card?.info;

  if (!refInfoData) return <ShimmerUI></ShimmerUI>;

  let { name, avgRating, cuisines, locality } = refInfoData;
  let itemCards = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  // debugger;
  // console.log("recommended items", itemCards);
  return (
    <div className="pl-90">
      <div className="resInfoDiv">
        <h1 className="text-amber-800">{name} :</h1>
        <p>avgRating:{avgRating}</p>
        <p>cuisines:{cuisines?.join(",")}</p>
        <p>locality:{locality}</p>
      </div>

      <div className="recommendedDiv">
        <h1 className="text-amber-800">Recomended Items :</h1>
        {itemCards.map((elem, index) => {
          // console.log(elem);
          return (
            <div>
              <RestaurantCategory
                showItems={showItems}
                setShowItems={setShowItems}
                elem={elem}
                index={index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
