import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="topnav">
            <Link className='active' to='/'>Home</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>News</Link>
            <Link to='/contact-us'>Contact</Link>
            <Link to='/about-us'>About</Link>
        </div>
    );
}

export default NavBar;
