/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./index.css";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Popup from "reactjs-popup";
export default function ProductCard(props) {
  const { product } = props;
  const { id, imgUrl, name } = product;
  const [quantity, setQuantity] = useState(0);
  const [like, setLike] = useState(false);
  const decrease = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  };
  const increase = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const liked = () => {
    setLike((prevState) => !prevState);
  };
  return (
    <CartContext.Consumer>
      {(value) => {
        const { nameOfProduct, addToCart } = value;
        const thanku = () => {
          nameOfProduct(name);
        };
        const clicked = () => {
          addToCart({ ...product, quantity });
        };
        const colord = like ? "red" : "";
        return (
          <li className="eachPlantItem">
            <span onClick={liked}>
              {colord ? (
                <FaHeart style={{ color: "red" }} className="heartBtn" />
              ) : (
                <CiHeart className="heartBtn" />
              )}
            </span>
            <div>
              <img className="imgss" src={imgUrl} />
              <Link to="/thankyou">
                <button onClick={thanku} className="viewProduct">
                  View Product
                </button>
              </Link>
            </div>
            <div className="productDetailsContainer">
              <h1 className="productHeading">{name}</h1>
              <p className="productPara">Indoor Plant,Low maintenance</p>
              <div className="d-flex">
                <p className="cutOff me-3">₹ 359</p>
                <p className="price">₹ 299</p>
              </div>
              <div className="buttonContainer">
                <div className="addToCartBtn">
                  <button className="decreaseBtn" onClick={decrease}>
                    -
                  </button>
                  <div className="popup-container">
                    <Popup
                      modal
                      trigger={
                        <div>
                          <p className="quantityContainer">
                            {quantity === 0 ? (
                              <>Add to cart</>
                            ) : (
                              <>{quantity}</>
                            )}
                          </p>
                        </div>
                      }
                    >
                      {(close) => (
                        <>
                          <div className="popContainer">
                            <h1>Add To Cart</h1>
                            <p>confirm to add</p>
                            <img className="popupImg" src={imgUrl} />
                            <h1>{name}</h1>
                            <p>Quantity : {quantity}</p>
                            <div className="d-flex">
                              <button
                                type="button"
                                className="trigger-button btn btn-warning me-2"
                                onClick={() => close()}
                              >
                                Close
                              </button>
                              <button
                                className="btn btn-primary"
                                onClick={() => close()}
                                onClick={clicked}
                              >
                                confirm
                              </button>
                            </div>
                          </div>
                        </>
                      )}
                    </Popup>
                  </div>
                  <button className="increaseBtn" onClick={increase}>
                    +
                  </button>
                </div>

                <button className="buyOnRent"> Buy on Rent</button>
              </div>
            </div>
          </li>
        );
      }}
    </CartContext.Consumer>
  );
}
