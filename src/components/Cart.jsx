import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  incrementItem,
  decrementItem,
} from "../utils/cartSlice";
import noImage from "../utils/noimage.png";

const Cart = () => {
  const dispatch = useDispatch();
  const itemCards = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-orange-600">
          🛒 Cart Items ({itemCards.length})
        </h1>

        <button
          onClick={handleClearCart}
          className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700"
        >
          CLEAR CART
        </button>
      </div>

      {itemCards.length === 0 ? (
        <h1 className="text-center text-3xl text-gray-500 mt-20">
          Cart is Empty 🛍️
        </h1>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itemCards.map((elem) => (
            <div
              key={elem.card.info.id}
              className="bg-white rounded-2xl shadow-xl p-5"
            >
              <img
                className="w-full h-56 object-cover rounded-xl"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  elem.card.info.imageId
                }
                alt="Restaurant"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = noImage;
                }}
              />

              <h1 className="text-2xl font-bold text-orange-600 mt-4">
                {elem.card.info.name}
              </h1>

              <p className="text-gray-600 mt-2">
                {elem.card.info.description}
              </p>

              <div className="flex items-center gap-4 mt-5">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg text-xl font-bold"
                  onClick={() =>
                    dispatch(decrementItem(elem.card.info.id))
                  }
                >
                  -
                </button>

                <span className="text-2xl font-bold">
                  {elem.count}
                </span>

                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-xl font-bold"
                  onClick={() =>
                    dispatch(incrementItem(elem.card.info.id))
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;