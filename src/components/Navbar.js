import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from 'react-icons/fa'

const Navigation = ({ cart }) => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand bsPrefix="logo">StarLight</Navbar.Brand>
                <Nav className="justify-content-center">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/shop" className="nav-link">Shop</Link>
                </Nav>
                <Nav><div className="cart-nav">
                    <Link to="/cart" className="nav-link"><FaShoppingCart />
                        <span className="header__cart-items">({cart.length})</span>
                    </Link>
                </div>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation