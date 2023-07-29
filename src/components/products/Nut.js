import React, { useEffect } from "react";
import axios, * as others from "axios";
// import "./Nut.css";
import "../Product.css";
import { loadToNuts } from "../../actions/nut";
import { useDispatch, useSelector } from "react-redux";
import { addToUsersWishlist } from "../../actions/user";

function Nut() {
  const nuts = useSelector((state) => state.nuts);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);

  const loadProduct = () => {
    dispatch(loadToNuts);
  };

  useEffect(() => {
    loadProduct();
  }, []);
  const handleClick = async (data) => {
    dispatch(addToUsersWishlist(data, user.userInfo._id));
  };
  return (
    <div className="products">
      {nuts.pending === true || user.pending === true ? (
        <img
          className="loader"
          src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=2250&name=CSS%20infinite%20loading%20animation%20example.gif"
          alt="loading-picture"
        ></img>
      ) : (
        nuts.items.map((n) => {
          return (
            <div className="product">
              <img src={n.img} alt="fruit-pic"></img>
              <h1>{n.name}</h1>
              <p>{n.price}</p>
              <p>{n.description}</p>
              <button onClick={() => handleClick(n)}>Add to Wishlist</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Nut;
