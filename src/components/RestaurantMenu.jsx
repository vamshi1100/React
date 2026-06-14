import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import usefetchResData from "../utils/usefetchResData";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export default function RestaurantMenu(props) {
  let { resId } = useParams();
  let resInfo = usefetchResData(resId);
  let [showItems, setShowItems] = useState(0);

  let refInfoData = resInfo?.data?.cards[2]?.card?.card?.info;

  if (!refInfoData) return <ShimmerUI />;

  let { name, avgRating, cuisines, locality } = refInfoData;
  let itemCards = resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  // debugger;
  // console.log("recommended items", itemCards);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-orange-50 to-yellow-50 py-10 px-4" data-testid='resMenu'>
      <div className="max-w-5xl mx-auto">
        {/* Restaurant Info Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200 mb-10">
          <h1 className="text-5xl font-extrabold text-orange-600 mb-6">
            🍽️ {name}
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-2xl shadow">
              <h2 className="text-lg font-bold text-green-700">⭐ Rating</h2>
              <p className="text-xl font-semibold mt-2">{avgRating}</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-2xl shadow">
              <h2 className="text-lg font-bold text-blue-700">🍜 Cuisines</h2>
              <p className="mt-2">{cuisines?.join(", ")}</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-2xl shadow">
              <h2 className="text-lg font-bold text-purple-700">📍 Locality</h2>
              <p className="mt-2">{locality}</p>
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
          <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-8">
            🔥 Recommended Items
          </h1>

          <div className="space-y-4">
            {itemCards.map((elem, index) => {
              // console.log(elem);

              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl shadow-md p-4 hover:shadow-xl transition-all duration-300"
                >
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
      </div>
    </div>
  );
}
