import React from "react";
import ItemCardList from "./ItemCardList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  debugger;
  const dispatch = useDispatch();
  const itemCards = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="flex">
        <h1 className="ml-10 mr-10">Cart Items :</h1>
        <button onClick={handleClearCart} className="bg-black text-white rounded-xl w-[180px] ">CLEAR CART</button>
      </div>

      <div className="recommendedDiv">
        <div className="card">
          {itemCards.map((elem) => (
            <div key={elem.info.id} className="mb-10 border-5 border-amber-300">
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
                <div className="badge">
                  <h1>{elem.info.avgRating}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
