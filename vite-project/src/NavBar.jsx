import Logo from './assets/sdpt logo.png'
import { Link } from 'react-router-dom';

function NavBar () {
 return (
    <div className="navbar-container">
        <img className='header-logo' src= {Logo} alt=" pfp" />
        <Link to="/"> Home </Link>
        <Link to="/AboutUs"> About Us </Link>
        <Link to="/Courses"> Courses </Link>
    </div>

 );
}

export default NavBar