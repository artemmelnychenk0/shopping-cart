import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Navigation from "../components/Navbar";
import Shop from "../components/Shop";
import Contact from "../components/Contact";
import Cart from "../components/Cart";
import Product from "../components/Product";
import { useState } from "react";

const RouteSwitch = () => {

    const [cart, setCart] = useState([]);

    const addToCart = (current) => {
        const num = Number(current) - 1;
        setCart(cart.concat(num))
    }

    const deleteForever = (current) => {
        const newValue = (Number(current) - 1)
        setCart(cart.filter(a => a !== newValue))
    }

    return (
        <BrowserRouter>
            <Navigation cart={cart} />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='shop/shop/:id' element={<Product addToCart={addToCart} />} />
                <Route path='/cart' element={<Cart cart={cart} deleteForever={deleteForever} />} />
            </Routes>
            <Contact />
        </BrowserRouter>
    )
};

export default RouteSwitch;