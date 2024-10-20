/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./index.css";
import Nursery from "../Nursery";
import ProductCard from "../ProductCard";
import Paginations from "../Paginations";
const plantsDetails = [
  { name: "Neem", id: 1, imgUrl: "https://feji.us/aqx81j", rating: 4.5 },
  { name: "Coconut", id: 2, imgUrl: "https://feji.us/bswoha", rating: 3.5 },
  { name: "Tulsi", id: 3, imgUrl: "https://feji.us/c92u1u", rating: 5.0 },
  {
    name: "Dragon Fruit",
    id: 4,
    imgUrl: "https://feji.us/aqx81j",
    rating: 2.4,
  },
  { name: "Basil", id: 5, imgUrl: "https://feji.us/bswoha", rating: 4.5 },
  { name: "Aloe Vera", id: 6, imgUrl: "https://feji.us/c92u1u", rating: 4.0 },
  { name: "Money Plant", id: 7, imgUrl: "https://feji.us/aqx81j", rating: 4.1 },
  { name: "Snake Plant", id: 8, imgUrl: "https://feji.us/bswoha", rating: 2.5 },
  { name: "Jade Plant", id: 9, imgUrl: "https://feji.us/c92u1u", rating: 2.4 },
  { name: "Rose", id: 10, imgUrl: "https://feji.us/aqx81j", rating: 2.9 },
  { name: "Orchid", id: 11, imgUrl: "https://feji.us/bswoha", rating: 5.0 },
  { name: "Lavender", id: 12, imgUrl: "https://feji.us/c92u1u", rating: 3.5 },
  { name: "Marigold", id: 13, imgUrl: "https://feji.us/aqx81j", rating: 4.5 },
  { name: "Neem", id: 14, imgUrl: "https://feji.us/aqx81j", rating: 4.5 },
  { name: "Coconut", id: 15, imgUrl: "https://feji.us/bswoha", rating: 3.5 },
  { name: "Tulsi", id: 16, imgUrl: "https://feji.us/c92u1u", rating: 5.0 },
  {
    name: "Dragon Fruit",
    id: 17,
    imgUrl: "https://feji.us/aqx81j",
    rating: 2.4,
  },
  { name: "Basil", id: 18, imgUrl: "https://feji.us/bswoha", rating: 4.5 },
  { name: "Aloe Vera", id: 19, imgUrl: "https://feji.us/c92u1u", rating: 4.0 },
  {
    name: "Money Plant",
    id: 20,
    imgUrl: "https://feji.us/aqx81j",
    rating: 4.1,
  },
  {
    name: "Snake Plant",
    id: 21,
    imgUrl: "https://feji.us/bswoha",
    rating: 2.5,
  },
  { name: "Jade Plant", id: 22, imgUrl: "https://feji.us/c92u1u", rating: 2.4 },
  { name: "Rose", id: 23, imgUrl: "https://feji.us/aqx81j", rating: 2.9 },
  { name: "Orchid", id: 24, imgUrl: "https://feji.us/bswoha", rating: 5.0 },
  { name: "Lavender", id: 25, imgUrl: "https://feji.us/c92u1u", rating: 3.5 },
  { name: "Marigold", id: 26, imgUrl: "https://feji.us/aqx81j", rating: 4.5 },
  { name: "Rose", id: 27, imgUrl: "https://feji.us/aqx81j", rating: 2.9 },
  { name: "Orchid", id: 28, imgUrl: "https://feji.us/bswoha", rating: 5.0 },
  { name: "Lavender", id: 29, imgUrl: "https://feji.us/c92u1u", rating: 3.5 },
  { name: "Marigold", id: 30, imgUrl: "https://feji.us/aqx81j", rating: 4.5 },
  { name: "Neem", id: 31, imgUrl: "https://feji.us/aqx81j", rating: 4.5 },
  { name: "Coconut", id: 32, imgUrl: "https://feji.us/bswoha", rating: 3.5 },
  { name: "Tulsi", id: 33, imgUrl: "https://feji.us/c92u1u", rating: 5.0 },
  {
    name: "Dragon Fruit",
    id: 17,
    imgUrl: "https://feji.us/aqx81j",
    rating: 2.4,
  },
  { name: "Basil", id: 18, imgUrl: "https://feji.us/bswoha", rating: 4.5 },
  { name: "Aloe Vera", id: 19, imgUrl: "https://feji.us/c92u1u", rating: 4.0 },
  {
    name: "Money Plant",
    id: 20,
    imgUrl: "https://feji.us/aqx81j",
    rating: 4.1,
  },
];

export default class Products extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 6,
  };
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };
  render() {
    const { currentPage, itemsPerPage } = this.state;

    // Calculate indexes for the products on the current page
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = plantsDetails.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );

    // Determine total number of pages
    const totalPages = Math.ceil(plantsDetails.length / itemsPerPage);
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
            <h1 className="nurseryHeading">Nursery</h1>
            <Nursery />
          </div>
          <div className="filterProductContainer">
            <div className="filterContainer">
              <ul className="filterUnorderList">
                <li>
                  <p className="filterEactPara">
                    Filter <span className="clearBtn">CLEAR ALL</span>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Type of Plants <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Price <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Nursery<spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Ideal Plants Location <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Indoor/Outdoor <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Maintenance <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Plant Size <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Water Schedule <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Color <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Seasonal <spam>+</spam>
                  </p>
                </li>
                <li>
                  <p className="filterEactPara">
                    Light Efficient <spam>+</spam>
                  </p>
                </li>
              </ul>
            </div>
            <div className="productContainer">
              <div className="d-flex">
                <p className="TotalProducts">300 products</p>
                <p className="sortBtn">SORT BY</p>
              </div>

              <ul className="productListContainer">
                {currentProducts.map((each) => (
                  <ProductCard key={each.id} product={each} />
                ))}
              </ul>

              <div>
                <Paginations
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
