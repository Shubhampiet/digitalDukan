import { useContext } from "react";
import Products from "./Products";
import { Context } from "../utils/Context";

const RelatedProducts = ({headingText}) => {
    const{product, products}=useContext(Context)
    console.log("singleProduct",product)
    console.log("products",products)
    const relatedProducts=products.filter((element)=>{return element.categoryId===product.categoryId})
    console.log("rp",relatedProducts)
    return(
        <div className="products">
         <Products headingText={"Related PRoducts"}  products={relatedProducts}/>
          </div>

    )
};

export default RelatedProducts;