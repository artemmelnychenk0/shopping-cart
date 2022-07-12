import { Link } from 'react-router-dom';
import main from '../assets/main.jpg'

const Homepage = () => {
    return (
        <div>
            <img src={main} alt='main' className='main'></img>
            <div className="brand">StarLight</div>
            <div className="centered">We don't do fashion, we are fashion</div>
            <Link to="/shop">
                <button className='shop-now'>Shop now</button>
            </Link>
        </div>
    )
}

export default Homepage;