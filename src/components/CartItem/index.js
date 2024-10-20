import React from "react";
import CartContext from "../../context/CartContext";
import "./index.css";
import { MdDeleteOutline } from "react-icons/md";
export default function CartItem(props) {
  const { products } = props;
  const { id, imgUrl, name, quantity } = products;

  return (
    <CartContext.Consumer>
      {(value) => {
        const {
          incrementCartItemQuantity,
          decrementCartItemQuantity,
          removeCartItem,
        } = value;
        const decreaseBtn = () => {
          decrementCartItemQuantity(id);
        };
        const inceaseBtn = () => {
          incrementCartItemQuantity(id);
        };
        const removeItem = () => {
          removeCartItem(id);
        };
        return (
          <li className="cartItem">
            <img className="cartItemImg" src={imgUrl} />
            <p>{name}</p>
            <p>₹ 299</p>
            <div className="quantityContainer">
              <button className="btns" onClick={decreaseBtn}>
                -
              </button>
              <p className="quantitys">{quantity}</p>
              <button className="btns" onClick={inceaseBtn}>
                +
              </button>
            </div>
            <button className="removeItem" onClick={removeItem}>
              <MdDeleteOutline className="w-90" />
            </button>
          </li>
        );
      }}
    </CartContext.Consumer>
  );
}
