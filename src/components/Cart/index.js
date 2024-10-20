import React, { Component } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem";
import Header from "../Header";
import { Link } from "react-router-dom";
import "./index.css";
export default class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList, removeAllCartItems } = value;
          const removeAll = () => {
            removeAllCartItems();
          };
          return (
            <>
              <Header />
              <div className="cardContainer">
                {cartList.length > 0 ? (
                  <>
                    <button
                      className="btn btn-primary removeAllBtn"
                      onClick={removeAll}
                    >
                      Remove All
                    </button>
                    <ul className="listContainers">
                      {cartList.map((eachProduct) => (
                        <CartItem products={eachProduct} key={eachProduct.id} />
                      ))}
                    </ul>
                  </>
                ) : (
                  <>
                    <h1>Empty Cart</h1>
                    <Link to="/products">
                      <button className="btn btn-primary">
                        Back to Shopping
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}
