import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

const Contact = () => {
    return (
        <div>
            <Navbar fixed="bottom" bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand bsPrefix="bottom">Contact Us</Navbar.Brand>
                    <Nav className="justify-content-center">
                        <Link to="#" className="nav-link"><AiOutlineFacebook size='2em' /></Link>
                        <Link to="#" className="nav-link"><AiOutlineInstagram size='2em' /></Link>
                        <Link to="#" className="nav-link"><FiTwitter size='2em' /></Link>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    )
}
export default Contact