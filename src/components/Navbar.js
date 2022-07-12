import { Link } from "react-router-dom"
import "../styles/route.css"

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
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
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>

            </nav>
        </div>
    )
}
export default Navbar