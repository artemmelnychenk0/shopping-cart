import React, { useState, useEffect } from "react"
import '../styles/shop.css'

const Shop = () => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);
    // const [selected, setSelected] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products');
        const products = await data.json()
        console.log(products)
        setItems(products);
    }

    // const added = (product) => {
    //     setSelected(product)
    // }


    return (
        <div>
            <h1>Shopping Page</h1>
            <div className="display">
                {items.map(item => (
                    <div key={item.id} className="item">
                        <img src={item.image} alt={item.title}></img>
                        <div>{item.title}</div>
                        <div>{item.price}</div>
                        <button type="submit">Add to Cart</button>
                    </div>
                ))}
            </div>

            {/* <img src={item.image} alt={item.title}></img> */}
        </div>
    )
}

export default Shop;