import React, { useContext, useEffect, useState } from "react";
import axios, * as others from "axios";
// import "./Vegetable.css";
import "../Product.css";
import { useDispatch, useSelector } from "react-redux";
import { loadToVegetables } from "../../actions/vegetable";
import { addToUsersWishlist } from "../../actions/user";

function Vegetable() {
  const vegetables = useSelector((state) => state.vegetables);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  const loadProduct = () => {
    dispatch(loadToVegetables);
  };

  useEffect(() => {
    loadProduct();
  }, []);
  const handleClick = async (data) => {
    dispatch(addToUsersWishlist(data, user.userInfo._id));
  };
  return (
    <div className="products">
      {vegetables.pending === true || user.pending === true ? (
        <img
          className="loader"
          src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=2250&name=CSS%20infinite%20loading%20animation%20example.gif"
          alt="loading-picture"
        ></img>
      ) : (
        vegetables.items.map((v) => {
          return (
            <div className="product">
              <img src={v.img} alt="fruit-pic"></img>
              <h1>{v.name}</h1>
              <p>{v.price}</p>
              <p>{v.description}</p>
              <button onClick={() => handleClick(v)}>Add to Wishlist</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Vegetable;
