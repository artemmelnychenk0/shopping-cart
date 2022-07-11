import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import '../styles/shop.css'




const Shop = () => {


    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);



    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const products = await data.json()
        setItems(products);
    }



    return (
        <div>
            <h1>Shopping Page</h1>
            <div className="display">
                {items.map(item => (

                    <div key={item.id} className="item">
                        <Link to={`shop/${item.id}`}>
                            <img src={item.image} alt={item.title}></img>

                            <div>{item.title}</div>

                            <div>${Number(item.price).toFixed(0)}.00</div>



                        </Link>
                    </div>

                ))}
            </div>




        </div >
    )
}

export default Shop;