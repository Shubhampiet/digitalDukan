import "../assets/css/common.css";
import BannerImg from "../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="herobanner d-flex justify-content-center">
            <div className=" text-img d-flex justify-content-center container">
                <div className=" text-center">
                    <div className="sales-title fw-bold lh-1">SALES</div>
                    <p className="banner-des-txt">Welcome to your Digital Dukan, We assure your best user experience  </p>
                    <div className="buttonContent">
                        <button type="button" class="btn btn-primary me-4 p-2">Shop now</button>
                        <button type="button" class="btn btn-primary me-4 p-2">Read more</button>
                    </div>
                </div>
                <div className="w-50">
                <img src={BannerImg} alt="" className="imgContent w-100" />
                </div>

            </div>
        </div>
    )
};

export default Banner;