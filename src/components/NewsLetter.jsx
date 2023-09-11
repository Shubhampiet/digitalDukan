import "../assets/css/common.css";
import newsletter from "../assets/newsletter-bg.jpeg"
import { TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialTwitterCircular } from "react-icons/ti"
import { FaTelegramPlane, FaEmailPlane } from "react-icons/fa"
import { FcPhoneAndroid } from "react-icons/fc"
import { HiOutlineMail } from "react-icons/hi"

const Newsletter = () => {
    return (
        <div className="">
            <div className="newsLetter position-relative overflow-hidden">
                <div className="imageContent w-100">
                    <img src={newsletter} alt="" className="w-100 border border-2 border-black"/>
                </div>
                <div className="textContent position-absolute d-flex flex-column align-items-center justify-content-center">
                    <div className="fs-3 fw-bold">NEWSLETTER</div>
                    <div className="fs-1 fs-md-3 fw-medium">SIGN UP FOR LATEST UPDATES AND OFFERS</div>
                    <div className="inputfield my-1">
                        <input type="text" placeholder="Enter your email" className="border border-2 border-black me-4 rounded"/>
                        <button className="btn btn-primary">SUBSCRIBE</button>
                    </div>
                    <div className="fw-medium fs-3">Will be used with acordance to our privacy policy</div>
                    <div className="iconsImage fs-2">
                        <TiSocialLinkedinCircular />
                        <TiSocialFacebookCircular />
                        <TiSocialTwitterCircular />
                        <TiSocialInstagramCircular />
                    </div>
                </div>
            </div>

            <div className="description m-5 text-center lh-lg">

                <div className="about">
                    <div className="fw-bold">About</div>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil sapiente tempora fugit eaque quaerat, facilis totam ut quia sequi aliquid, similique corporis voluptates iusto?</p>
                </div>
                <div className="contact">
                    <div className="fw-bold ">Contact</div>
                    <div className="d-flex justify-content-center align-item-center">
                        <FaTelegramPlane  className="fs-4 me-1"/>
                        <p>xxx@telegram</p>
                    </div>
                    <div className="d-flex justify-content-center align-item-center">
                        <FcPhoneAndroid  className="fs-4  me-1"/>
                        <p>7982164735</p>
                    </div>
                    <div className="d-flex justify-content-center align-item-center">
                        <HiOutlineMail className="fs-4 me-1"/>
                        <p>shubham.itpiet@gmail.com</p>
                    </div>
                </div>
                {/* categories of products */}
                <div className="categoriess d-flex flex-column justify-content-center">
                    <div className="fw-bold ">Categories</div>
                    <div className="text-center">
                        <div>Headphones</div>
                        <div>Smart Watches</div>
                        <div>Bluetooth Speakers</div>
                        <div>Wireless Earbuds</div>
                        <div>Home Theaters</div>
                        <div>Projectors</div>
                    </div>
                </div>
                <div className="pages">
                    <div className="fw-bold">Pages</div>
                    <div>
                        <div>Home</div>
                        <div>About</div>
                        <div>Privacy Policy</div>
                        <div>Returns</div>
                        <div>Terms & Conditions</div>
                        <div>Contact Us</div>
                    </div>
                </div>
            </div>

           
        </div>
    )
};

export default Newsletter;