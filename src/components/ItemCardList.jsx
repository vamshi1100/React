import React from "react";

const ItemCardList = ({ itemCards }) => {
    debugger
  return (
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
  );
};

export default ItemCardList;
