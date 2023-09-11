import "../assets/css/common.css";
import { MdClose } from "react-icons/md"
import { useContext, useState } from "react";
import { Context } from "../utils/Context";


const Search = ({ setShowSearchPage }) => {
    const [data, setData] = useState([])

    const { products } = useContext(Context)
    const [query, setQuery] = useState("");

    const onChangeHandler = (e) => {
        setQuery(e.target.value);
        console.log(data)
        setData(products.filter((product) => { return product.title.toLowerCase().includes(query.toLowerCase()) }))

        if (query.length === 0) {
            setData([]);
        };
        console.log("q", query)
    }

    return(
    <div className="searchPage">
        <div className="d-flex justify-content-between px-5 my-3">
            <div className="searchPage-input">
                <input
                    type="text"
                    placeholder="Search For Products"
                    value={query}
                    onChange={(e) => onChangeHandler(e)}
                    className="w-100 py-2 text-center fs-4 border-0"
                />
            </div>
            <div className="cursor-pointer ">
                <span className="closeButton fs-4 color-red" onClick={() => setShowSearchPage(false)}> Close<MdClose className="fs-3" /></span>
            </div>

        </div>
        {data?.map((item) => (
            <div key={item.id} className="searchResultProduct d-flex justify-content-center">

                <div className=" d-flex height-150px">
                    <div className="text-end me-3">
                        <img src={item.imageUrl} className="w-50"/>
                    </div>
                    <div className="searchProductDetails pt-4">
                        <div className="searchProductName text-center fw-medium">
                            {item.title.slice(0, 30) + ("...")}
                            {data.length}
                        </div>
                        <div className="searchProductDescription">
                            {item.description.slice(0, 70) + ("...")}
                        </div>
                    </div>
                </div>
            </div>

        ))}
    </div>
    )
};

export default Search;