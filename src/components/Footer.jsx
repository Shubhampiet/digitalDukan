import "../assets/css/common.css";
import payments from "../assets/payments.png"
const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between align-items-center px-4 py-4">
            <div className="color-white">
                <span>Lorem ipsum dolor sit ame fuga eius, laboriosam quod autem!</span>
            </div>
            <div className="imageContent">
                <img src={payments} alt="payments" />
            </div>
        </div>
    )
};

export default Footer;