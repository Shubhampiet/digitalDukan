import "../assets/css/common.css";
import { useContext, useState } from "react";
import { Context } from "../utils/Context";
import { useNavigate } from "react-router-dom"


const Category = () => {
    const { categories, products, setcategoryId } = useContext(Context);
    const navigate = useNavigate();

    const [isCategoryProduct, setIsCategoryProducts] = useState(false)

    function filteredData(id) {
        setcategoryId(id);
        setIsCategoryProducts(true);
        navigate("/categoryProducts/" + id);
    }

    return (

        <div className="shopByCategory mb-5">
            <div className="secHeading  fs-2 mt-4 ">CATEGORIES</div>
            <div className=" d-flex justify-content-center mt-4 ">
                {categories?.map((item) => (
                    <div key={item.id} className="category-item mx-4"
                        onClick={() => filteredData(item.id)} >
                        <img src={item.imageUrl} />
                    </div>
                ))}
            </div>
        </div>

    )
};

export default Category;