import Logo from './assets/sdpt logo.png'
import HeaderLogo from './assets/header bg.png'
import { Link } from 'react-router-dom';


function NavBar () {
 return (

    <div className="header-container">
        
        <div className='nav-container'>
        <img className='header-logo' src= {Logo} alt=" pfp" />
        <div className= 'navlinks-container' >
        <Link className='navlink' to="/"> Home </Link>
        <Link className='navlink' to="/AboutUs"> About Us </Link>
        <Link className='navlink' to="/Courses"> Courses </Link>
        </div>
        </div>
    </div>

 );
}

export default NavBar