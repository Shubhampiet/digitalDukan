import "../assets/css/cart.css"
import { MdClose } from "react-icons/md"
import CartItem from "./cartItems";
import { useContext } from "react";
import { Context } from "../utils/Context";


const Cart = ({ setShowCart }) => {
    const { subtotal } = useContext(Context)
    return (
        <div className="cartPanel">
            <div className="opacLayer">

            </div>
            <div className="cartContent">

                <div className="cartHeader mb-4">
                    <h1>Cart Items</h1>
                    <span className="closeButton" onClick={() => setShowCart(false)}> Close<MdClose /></span>
                </div>
                <CartItem />
                <div className="bottom">
                    <div className="subtotal">
                        <div className="title">Subtotal</div>
                        <div className="price">&#8377;{subtotal}</div>
                    </div>
                    <div className="checkout">Chectout</div>
                </div>
            </div>

        </div>
    )
};

export default Cart;