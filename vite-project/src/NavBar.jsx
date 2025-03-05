import Logo from './assets/sdpt logo.png'
import HomeIcon from './assets/Home Icon.png'
import AboutIcon from './assets/About Icon.png'
import CoursesIcon from './assets/Courses Icon.png'
import ProfileIcon from './assets/Profile Icon.png'
import { Link } from 'react-router-dom';


function NavBar () {
 return (

    <div className="header">
    <div className="nav-container">
      <img className="header-logo" src={Logo} alt="pfp" />
      <div className="navlinks-container">
        <Link className="navlink" to="/">
          <img className="nav-icon" src={HomeIcon} alt="Home" />
        </Link>
        <Link className="navlink" to="/AboutUs">
          <img className="nav-icon" src={AboutIcon} alt="About Us" />
        </Link>
        <Link className="navlink" to="/Courses">
          <img className="nav-icon" src={CoursesIcon} alt="Courses" />
        </Link>
        <Link className="navlink" to="/Courses">
          <img className="nav-icon-profile" src={ProfileIcon} alt="Courses" />
        </Link>
      </div>
    </div>
  </div>

 );
}

export default NavBar