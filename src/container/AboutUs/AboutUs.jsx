import React from 'react';
import {images} from "../../constants";
import { HashLink as Link } from 'react-router-hash-link';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='G letter'/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'></img>
        <p className='p__opensans'>"Crafting culinary experiences that transcend the ordinary, our fine dining establishment merges exquisite flavors with impeccable service, inviting guests to indulge in moments of gastronomic delight and refined elegance."</p>
        <button type='button' className='custom__button'><Link to="#chef">Know More</Link></button>
      </div>
      <div className='app__aboutus-content_chop flex__center'>
        <img src={images.Designer} alt="about_chop"/>
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'></img>
        <p className='p__opensans'>"Crafting culinary experiences that transcend the ordinary, our fine dining establishment merges exquisite flavors with impeccable service, inviting guests to indulge in moments of gastronomic delight and refined elegance."</p>
        <button type='button' className='custom__button'>
          <Link to="#chef">Know More</Link>
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
