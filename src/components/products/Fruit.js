import React, { useContext, useEffect } from "react";
import axios, * as others from "axios";
// import "./Fruit.css";
import "../Product.css";
import { useDispatch, useSelector } from "react-redux";
import { loadToFruits } from "../../actions/fruit";
import { addToUsersWishlist } from "../../actions/user";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Fruit() {
  let fruits = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  const loadProduct = async () => {
    dispatch(loadToFruits);
  };

  useEffect(() => {
    loadProduct();
  }, []);
  const handleClick = async (data) => {
    dispatch(addToUsersWishlist(data, user.userInfo._id));
  };

  return (
    <div className="products">
      {fruits.pending === true || user.pending === true ? (
        <img
          className="loader"
          src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=2250&name=CSS%20infinite%20loading%20animation%20example.gif"
          alt="loading-picture"
        ></img>
      ) : (
        fruits.items.map((f) => {
          return (
            <div className="product">
              <img src={f.img} alt="fruit-pic"></img>
              <h1>{f.name}</h1>
              <p>{f.price}</p>
              <p>{f.description}</p>
              <button onClick={() => handleClick(f)}>Add to Wishlist</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Fruit;
