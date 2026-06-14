import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCategory = ({ showItems, setShowItems, elem, index }) => {
  debugger;

  const dispatch = useDispatch();

  const handleADD = (elem) => {
    dispatch(addItem(elem));
  };
  return (
    <div className="mb-6">
      <div
        className="cursor-pointer"
        onClick={() => setShowItems(showItems === index ? null : index)}
      >
        {elem?.card?.card?.title && (
          <div className="flex justify-between items-center bg-white shadow-lg rounded-2xl px-6 py-4 border border-gray-200 hover:bg-orange-50 hover:shadow-xl transition-all duration-300">
            <div className="font-bold text-xl text-slate-700">
              {elem.card.card.title}
            </div>

            <div
              className={`text-2xl transition-transform duration-300 ${
                showItems === index ? "rotate-180" : ""
              }`}
            >
              ⬇️
            </div>
          </div>
        )}
      </div>

      {showItems === index && (
        <div
        
          key={elem?.card?.card?.title}
          className="mt-4 bg-slate-50 rounded-2xl p-5 shadow-md"
        >
          {elem?.card?.card?.itemCards.map((itemElem) => (
            <div data-testid='recommended'
              key={itemElem.card.info.id}
              className="bg-white rounded-2xl shadow-lg p-5 mb-6 border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-orange-600 mb-4">
                {itemElem.card.info.name}
              </h2>

              <div className="imgDiv relative mb-4">
                <img
                  className="w-[400px] h-[250px] object-cover rounded-2xl border border-gray-300"
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/" +
                    itemElem.card.info.imageId
                  }
                  alt="Restaurant"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = noImage;
                  }}
                />
              </div>

              <h1 id="names" className="w-[400px] text-gray-700 leading-7 mb-4">
                <span className="font-bold text-slate-800">Description:</span>{" "}
                {itemElem.card.info.description}
              </h1>

              <button
                className="bg-orange-500 text-white font-bold px-6 py-2 rounded-xl hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-md"
                onClick={() => {
                  handleADD(itemElem);
                }}
              >
                ADD+
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
