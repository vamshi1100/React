import { useState,useEffect } from 'react';

const usefetchResData = (resId) => {
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
  return resInfo;
}

export default usefetchResData;