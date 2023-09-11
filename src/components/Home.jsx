import "../assets/css/common.css";
import {useEffect, useContext } from "react";
import Category from "./Category";
import Products from "./Products";
import Banner from "./Banner";
import { Context } from "../utils/Context";
import data from "../assets/data/category.json"
import categoryProducts from "../data/categoryProducts.json"


const Home = () => {

  const { products, setProducts, setCategories } = useContext(Context);

  useEffect(() => {
    setCategories(data);
    setProducts(categoryProducts)
  }, []);

  return (
    <div >
      <Banner />
      <div className="mainContent">
        <div className="layout">
          <Category />
          <Products headingText={"Popular Products"} products={products}/>
        </div>
      </div>
    </div>
  );
};

export default Home;