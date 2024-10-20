import React from "react";

const CartContext = React.createContext({
  cartList: [],
  addToCart: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  removeCartItem: () => {},
  removeAllCartItems: () => {},
  nameOfProduct: () => {},
  productName: "",
});

export default CartContext;
