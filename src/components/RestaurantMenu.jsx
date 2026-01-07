import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
export default function RestaurantMenu() {
  debugger;
  let { resId } = useParams();
  console.log(resId);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    debugger;
    // const data =await fetch("https://namastedev.com/api/v1/listRestaurantMenu/123456");
    const data = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
    );
    const resInfoData = await data.json();
    setResInfo(resInfoData);
    console.log(resInfoData);
    console.log("main data : ", resInfoData.data.cards[2].card.card.info);
    console.log(
      "recommended items : ",
      resInfoData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    );
  };

  let refInfoData = resInfo?.data?.cards[2]?.card?.card?.info;

  if (!refInfoData) return <ShimmerUI></ShimmerUI>;

  let { name, avgRating, cuisines, locality } = refInfoData;
  let itemCards = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  console.log("recommended items2", itemCards);

  return (
    <div>
      <div className="resInfoDiv">
        <h1>{name} :</h1>
        <p>avgRating:{avgRating}</p>
        <p>cuisines:{cuisines?.join(",")}</p>
        <p>locality:{locality}</p>
      </div>

      <div className="recommendedDiv">
        <h1>Recomended Items :</h1>
        {itemCards.map((elem) => {
          // console.log(elem);
          return (
            <div>
              <p>{elem?.card?.card?.title}</p>
              <p>
                {elem?.card?.card?.itemCards.map((itemElem) => (
                  <>
                    <p>{itemElem.card.info.name}</p>
                  </>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
