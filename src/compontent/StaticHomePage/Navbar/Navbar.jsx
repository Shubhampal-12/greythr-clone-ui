import "./Navbar.css"
// import "../../App.css";
// import "../../StaticHomePage/Navbar/App.css"
import { Link } from 'react-router-dom' 
const imageUrl = 'http://127.0.0.1:8000/getimages/logo'; 
 

const Navbar = () => {
  
  return (
    <nav className="navbar" >
      <div className="navbar-container">
        <Link to='/' className="navbar-logo">
           <img src={imageUrl}   alt="" />
        </Link>

        <div className="nav-left">
          <div className="">
            <ul className="nav-menu">
              <li className="nav-item">
                <a href="" className="nav-link">Product</a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Pricing </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">Customar </a>
              </li>
              <li className="nav-item">
                <a href=" " className="nav-link">Resources</a>
              </li>
            </ul>
          </div>

          <div className="nav-right">
            <a href="">Request Demo</a>
             <Link to='/login' className="Link">Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
