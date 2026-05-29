import React from "react";

const RestaurantCategory = ({showItems,setShowItems,elem,index}) => {
  return (
    <div>
      <h1
        className="text-amber-300"
        onClick={() => {
          setShowItems(index);
        }}
      >
        {elem?.card?.card?.title} ⬇️
      </h1>
      {showItems === index && (
        <div>
          {elem?.card?.card?.itemCards.map((itemElem) => (
            <>
              <p>{itemElem.card.info.name}</p>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
