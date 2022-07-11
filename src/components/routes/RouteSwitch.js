import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Navbar from "../Navbar";
import Shop from "../Shop";
import Contact from "../Contact";
import Cart from "../Cart";
import Product from "../Product";
import { useState } from "react";

const RouteSwitch = () => {

    const [cart, setCart] = useState([]);

    const addToCart = (current) => {
        const num = Number(current) - 1;
        setCart(cart.concat(num))
        console.log(cart)
    }
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='shop/shop/:id' element={<Product addToCart={addToCart} />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart cart={cart} />} />
            </Routes>
        </BrowserRouter>
    )
};

export default RouteSwitch;