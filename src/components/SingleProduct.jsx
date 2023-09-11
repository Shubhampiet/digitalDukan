import "../assets/css/common.css";
import { useContext, useState } from "react";
import { Context } from "../utils/Context";
import RelatedProducts from "./RelatedProducts"
import { FaCartPlus } from "react-icons/fa"
import { TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialTwitterCircular } from "react-icons/ti"

const SingleProduct = () => {
    const { product, handleAddToCart, cartObject, incriment, decriment } = useContext(Context)
    console.log("product", product)

    return (
        <div className="singleProduct">
            <div className="productContent d-flex p-5 lh-lg">
                <div className="productImage w-50 text-center">
                    <img src={product.imageUrl} alt="imageUrl" className="w-50"/>
                </div>

                <div className="productDetails w-50">
                    <div className="textContent">
                        <span className="fw-bolder">{product.title}</span>
                        <div className="fw-medium">&#8377;{product.price}</div>
                        <span className="productDetails">{product.description}</span>
                    </div>
                    <div className="icons">
                        <div className="btn-cartBtn d-flex my-4">
                            <div className="quantityCounter me-4">
                                <button onClick={decriment} >-</button>
                                <span className="mx-3">{cartObject.quantity}</span>
                                <button onClick={incriment}>+</button>
                            </div>
                            <div >
                                <button class="rounded btn-pink" onClick={() => handleAddToCart(product, cartObject.quantity)} > <FaCartPlus className="mb-2"/>  ADD TO CART</button>
                            </div>
                        </div>
                        <div className="category">
                            <span className="fw-semibold fs-5">Category:</span>
                            <span className="fw-medium">{product.title}</span>
                        </div>
                        <div className="share">
                            <span className="fw-semibold fs-5">Share:</span>
                            <span className="iconsImage fs-3">
                                <TiSocialLinkedinCircular />
                                <TiSocialFacebookCircular />
                                <TiSocialTwitterCircular />
                                <TiSocialInstagramCircular />
                            </span>
                        </div>
                    </div>
                </div >
            </div>
            <RelatedProducts name={"Related Products"} />

        </div>
    )
};

export default SingleProduct;