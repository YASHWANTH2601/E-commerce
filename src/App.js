import React, { Component } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Products from "./components/Products";
import ThankYou from "./components/ThankYou";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";

export default class App extends Component {
  state = { cartList: [], productName: "" };
  nameOfProduct = (name) => {
    this.setState({ productName: name });
  };
  incrementCartItemQuantity = (id) => {
    this.setState((prevState) => ({
      cartList: prevState.cartList.map((eachCartItem) => {
        if (eachCartItem.id === id) {
          const updateQuantiy = eachCartItem.quantity + 1;
          return { ...eachCartItem, quantity: updateQuantiy };
        }
        return eachCartItem;
      }),
    }));
  };
  decrementCartItemQuantity = (id) => {
    const { cartList } = this.state;
    const productObject = cartList.find((each) => each.id === id);
    if (productObject.quantity > 1) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((eachCartItem) => {
          if (eachCartItem.id === id) {
            const updateQuantiy = eachCartItem.quantity - 1;
            return { ...eachCartItem, quantity: updateQuantiy };
          }
          return eachCartItem;
        }),
      }));
    }
  };
  removeAllCartItems = () => {
    this.setState({ cartList: [] });
  };
  removeCartItem = (id) => {
    const { cartList } = this.state;
    const itemRemovedList = cartList.filter((eachItem) => eachItem.id !== id);
    this.setState({ cartList: itemRemovedList });
  };
  addToCart = (productList) => {
    const { cartList } = this.state;
    const productObject = cartList.find((each) => each.id === productList.id);
    if (productObject) {
      this.setState((prevState) => ({
        cartList: prevState.cartList.map((eachItem) => {
          if (eachItem.id === productObject.id) {
            const updatedQuantity = eachItem.quantity + productList.quantity;
            return { ...eachItem, quantity: updatedQuantity };
          }
          return eachItem;
        }),
      }));
    } else {
      if (productList.quantity >= 1) {
        const updated = [...cartList, productList];
        this.setState({ cartList: updated });
      }
    }
  };
  render() {
    const { cartList, productName } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartList,
          addToCart: this.addToCart,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
          nameOfProduct: this.nameOfProduct,
          productName,
        }}
      >
        <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/thankyou" element={<ThankYou />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </>
      </CartContext.Provider>
    );
  }
}
