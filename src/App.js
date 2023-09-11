import {Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from "./components/Home";
import Category from "../src/components/Category";
import Newsletter from "./components/NewsLetter"
import Footer from "./components/Footer"
import SingleProduct from "./components/SingleProduct"
import AppContext from "./utils/Context";
import CategoryProducts from "./components/categoryProducts";

function App() {
    return (
      <AppContext>
        <Header />
        <Routes>
            <Route path="/" element={<Home/> }/>
            <Route path="/category/" element={<Category />}/>
            <Route path="/categoryProducts/:id" element={<CategoryProducts />}/>
            <Route path="/SingleProduct/:id" element={<SingleProduct />}/>
            <Route path="/about/" element={< Newsletter/>}/>
        </Routes>
        <Newsletter />
        <Footer />           
        </AppContext> 
    );
}

export default App;