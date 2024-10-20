import React from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./index.css";
export default function ThankYou() {
  const navigate = useNavigate();
  return (
    <CartContext.Consumer>
      {(value) => {
        const { productName } = value;

        const handleGoBack = () => {
          navigate("/products");
        };
        return (
          <div className="thank-you-container">
            <h1>{productName}</h1>
            <p>
              TThank you for choosing Chaperone services. We will soon get in
              touch with you!
            </p>
            <button onClick={handleGoBack} className="back-home-button">
              Back to Home
            </button>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
