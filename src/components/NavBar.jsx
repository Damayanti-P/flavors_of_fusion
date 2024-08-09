// import { useAppContext } from '../features/AppProvider';
import cart from '../imgs/cart.svg';
import logo from '../imgs/mobile-logo.png'
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppContext } from '../features/AppProvider';

function NavBar() {
  const {count}=useAppContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><img className='logo-nav' src={logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/home" className="nav-item nav-link  navCenter" >Home <span className="sr-only"></span></Link>
            <Link to="/menu" className="nav-item nav-link navCenter" >Menu</Link>
            {/* <Link to="/contactUs" className="nav-item nav-link navCenter">Contact Us</Link>  */}

            <form className="d-flex search" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn " type="submit"><SearchIcon color='primary'/></button>
            </form>
          </div>
          <div className="cartclass">
            {/* <a className="nav-item nav-link cartAdjust" href="/cart"> */}
            <Link to="/cart" className="nav-item nav-link cartAdjust">
              <div className="cart-container">
                <span className="cart-count">{count}</span>
                <ShoppingCartIcon sx={{ fontSize: 30 }} />
              </div>
            </Link>
           
          </div>
          <AccountCircleIcon sx={{ fontSize: 40 }}  />
        </div>
      </nav>
    </>
  )
};
export default NavBar;