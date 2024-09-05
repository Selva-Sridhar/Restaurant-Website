import React ,{useState}from 'react';
import { GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from 'react-icons/md';
//import { Link } from "react-scroll";
import {HashLink as Link } from 'react-router-hash-link';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false)
  const closeMenu = () => setClick(false)
  const[toggleMenu,setToggleMenu]=useState(false);
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><Link to="#header" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Home</Link></li>
      <li className='p__opensans'><Link to="#about" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>About</Link></li>
      <li className='p__opensans'><Link to="#menu" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Menu</Link></li>
      <li className='p__opensans'><Link to="#chef" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Chef</Link></li>
      <li className='p__opensans'><Link to="#gallery" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Gallery</Link></li>
      <li className='p__opensans'><Link to="#find" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Find Us</Link></li>
      <li className='p__opensans'><Link to="#contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Contacts</Link></li>
    </ul>
    <div className='app__navbar-login'>
      <Link to='/sign' className='p__opensans' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Log in/Register</Link>
      <div />
      <Link to="/ " className='p__opensans' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Book Table</Link>
    </div>
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
      <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() =>setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><Link to="#home">Home</Link></li>
            <li className='p__opensans'><Link to="#about">About</Link></li>
            <li className='p__opensans'><Link to="#menu">Menu</Link></li>
            <li className='p__opensans'><Link to="#awards">Awards</Link></li>
            <li className='p__opensans'><Link to="#contact">Conatcts</Link></li>
          </ul>
      </div>
      )}
    </div>
  </nav>
  )
};

export default Navbar;
