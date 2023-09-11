import "../assets/css/common.css";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx'
import { useContext, useEffect, useState } from "react";
import Cart from "./cart";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import { Context } from "../utils/Context";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearchPage, setShowSearchPage] = useState(false);
    const Navigate = useNavigate();
    const { cartItems } = useContext(Context);
    const [menuVisibility, setmenuVisibility]=useState(false)

    // HandleScroll function
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    const handleHome=()=>{
        Navigate("/") 
        setmenuVisibility(!menuVisibility)
    }
const handleAbout=()=>{
    Navigate("/about/") 
    setmenuVisibility(!menuVisibility)
    }
    const handleCategory=()=>{
        Navigate("/category/")
        setmenuVisibility(!menuVisibility)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`navbar d-flex align-items-center justify-content-between ${scrolled ? "sticky-header" : ""}`} >
                <div className="w-300px nav-container left">
                    <ul className="nav justify-content-around fs-5">
                    <li onClick={() => { Navigate("/") } }>Home</li>
                     <li onClick={() => { Navigate("/about/") }}>About</li>
                     <li onClick={() => { Navigate("/category/") }}>Category</li>
                        
                    </ul>
                </div>
                <div className="leftHam position-relative">
                    <div className="ham">
                        <RxHamburgerMenu onClick={()=>{setmenuVisibility(!menuVisibility)}}/>
                    </div>
                    {menuVisibility &&
                     <ul className="fs-5 position-absolute menuVisibility">
                  <li onClick={() => {handleHome() }}>Home</li>
                        <li onClick={() => {handleAbout() }}>About</li>
                        <li onClick={() => { handleCategory() }}>Category</li>
                 </ul>
                }
                </div>
             

                <div className="center">
                    <div className="icon fs-2">
                        DigitalDukan
                    </div>
                </div>

                <div className="w-300px d-flex justify-content-end position-relative">
                    <div className="w-100px d-flex justify-content-between fs-4">
                        <AiOutlineSearch onClick={() => setShowSearchPage(true)} className="cursor-pointer"/>
                        <AiOutlineHeart className="cursor-pointer"/>
                        <AiOutlineShoppingCart onClick={() => setShowCart(true)} className="cursor-pointer"/>
                    </div>
                    <span className={`cart-counter position-absolute rounded-circle background-pink text-center`}>{cartItems.length}</span>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearchPage && <Search setShowSearchPage={setShowSearchPage} />}
        </>
    );
};

export default Header;
