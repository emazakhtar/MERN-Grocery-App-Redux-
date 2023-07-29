import React, { useEffect } from "react";
import axios, * as others from "axios";
import "./Wishlist.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromUsersWishlist, loadToUsersWishlist } from "../actions/user";

function Wishlist() {
  const user = useSelector((state) => state.users);
  console.log(user.userInfo);
  const dispatch = useDispatch();
  const wishlist = user.userInfo.userWishlist;

  useEffect(() => {
    loadToUsersWishlist(user.userInfo._id);
  }, []);

  const handleClick = async (id) => {
    dispatch(deleteFromUsersWishlist(user.userInfo._id, id));
  };
  return (
    <div className="wishlist__items">
      {user.pending === true ? (
        <img
          className="loader"
          src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=2250&name=CSS%20infinite%20loading%20animation%20example.gif"
        ></img>
      ) : (
        wishlist.map((w) => {
          return (
            <div className="wishlist__item">
              <img src={w.img} alt="wishlist-pic"></img>
              <h1>{w.name}</h1> <p>{w.price}</p> <p>{w.description}</p>
              <button onClick={() => handleClick(w._id)}>
                Remove from Wishlist
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Wishlist;
