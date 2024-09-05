import React from 'react';
import { SubHeading } from '../../components';
import {images} from "../../constants";
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="header">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header_h1'>
        The key to Fine Dining
      </h1>
      <p className='p__opensans' style={{margin:'2rem o'}}>Composing independent blocks in different ways, and reusing them intelligently, reduces the amount of CSS code that you will have to maintain.</p>
      <button type='button' className='custom__button' >
        <Link to="#menu">Explore menu</Link>
      </button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.bowl} alt="bowl img"/>
    </div>
  </div>
);

export default Header;
