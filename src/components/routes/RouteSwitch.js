import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Navbar from "../Navbar";
import Shop from "../Shop";
import Contact from "../Contact";
import Cart from "../Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
};

export default RouteSwitch;