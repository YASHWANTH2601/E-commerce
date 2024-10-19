import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

import Products from "./components/Products";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
