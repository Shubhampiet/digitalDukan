import { useNavigate } from "react-router-dom";
import "../assets/css/common.css";
import { useContext } from "react";
import { Context } from "../utils/Context";


const Product= ({ data}) =>{
    const{ setProduct}=useContext(Context)
    const Navigate=useNavigate();

const singleProductPage=(id)=>{
    setProduct(data)
    Navigate("/singleProduct/" + id )
}

    return(
        <div className="productCard mx-4 my-4" onClick={()=>{singleProductPage(data.id)}}>
            <div className="thumbnail">
                <img src={data.imageUrl} alt=""/>
            </div>
            <div className="productDetails">
            <div className="name text-center mt-2 fw-medium">{data.title.slice(0, 10) + '...'}</div>
            <div className="price text-center mt-1 fw-medium">&#8377;{data.price}</div>            
            </div>
        </div>
    );
};
export default Product