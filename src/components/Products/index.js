/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";
const NurseryList = [
  { id: 1, imgUrl: "http://surl.li/zxzlqa" },
  { id: 2, imgUrl: "http://surl.li/zxzlqa" },
];
export default class Products extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="productContainers">
          <div className="typesOfPlants">
            <div className="searchBarContainer">
              <img className="searchIcon" src="http://surl.li/bsycky" />
              <input
                className="searchBar"
                type="search"
                placeholder="Search Plant"
              />
              <img className="plantIcon" src="http://surl.li/dzgjvi" />
              <hr className="searchBarLine" />
            </div>
            <p className="plants">Plants</p>
            <p className="pots">Pots</p>
            <p className="plantDetail">
              Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
              necessitatibus enim ut internos accusantium a numquam autem ab
              rerum omnis. Non molestiae ratione et laborum doloribus aut
              molestiae voluptates ut porro excepturi sit molestiae obcaecati
              qui quis beatae est voluptatem eius. Et architecto nihil id labore
              omnis hic iste deleniti et porro aspernatur.
            </p>
            <h1>Nursery</h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
