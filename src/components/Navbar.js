import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/route.css"

const Navbar = () => {
    const [sideCart, setsideCart] = useState(false)

    const showCart = () => setsideCart(!sideCart)

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart" onClick={showCart}>Cart</Link>
                    </li>
                </ul>
                {/* <button>Shop</button>
            <button>Contact</button>
            <button>Cart</button> */}
            </nav>
        </div>
    )
}
export default Navbar