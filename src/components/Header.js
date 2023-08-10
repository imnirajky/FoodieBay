import {LOGO_COMPANY} from '../config';
import { Link } from 'react-router-dom';

const Title = () => {
    return (
        <a href="/">
             <img className="logo" src={LOGO_COMPANY} alt="logo" />
        </a>
    );
} 
const Header = () => {
    return ( 
    <div className="header" > 
        <Title/>
        <div className="nav-items">
            <ul>
                <li>
                <Link to="/">
                    Home
                </Link>
                </li>
                <li>
                    <Link to="/about">
                    About
                    </Link>
                </li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>     
    );
}

export default Header;