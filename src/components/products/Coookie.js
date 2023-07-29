import React, { useEffect, useState } from "react";
import axios, * as others from "axios";
// import "./Coookie.css";
import "../Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToUsersWishlist } from "../../actions/user";
import { loadToCookies } from "../../actions/cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Coookie() {
  const cookies = useSelector((state) => state.cookies);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const [showMessage, setShowMessage] = useState(false);
  const loadProduct = () => {
    dispatch(loadToCookies);
  };

  useEffect(() => {
    loadProduct();
  }, []);
  const handleClick = async (data) => {
    dispatch(addToUsersWishlist(data, user.userInfo._id));

    user.pending === true ? setShowMessage(false) : setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  return (
    <div className="products">
      {cookies.pending || user.pending ? (
        <img
          className="loader"
          src="https://blog.hubspot.com/hs-fs/hubfs/CSS%20infinite%20loading%20animation%20example.gif?width=2250&name=CSS%20infinite%20loading%20animation%20example.gif"
          alt="loading-picture"
        ></img>
      ) : (
        cookies.items.map((c) => {
          return (
            <div className="product">
              <img src={c.img} alt="fruit-pic"></img>
              <h1>{c.name}</h1>
              <p>{c.price}</p>
              <p>{c.description}</p>
              <button onClick={() => handleClick(c)}>Add to Wishlist</button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Coookie;
