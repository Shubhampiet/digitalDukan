
import "../assets/css/common.css";
import Product from "./Product";

const Products = ({ products,headingText }) => {
  return (
    <div className="productsContainer">
      <div className="secHeading  fs-2 mt-4 text-uppercase">{headingText}</div>
      <div className="mt-4 product mx-5">

        {products?.map((item) => {
          return <Product key={item.id} data={item} />;
        })}

      </div>
    </div>
  );
};

export default Products;