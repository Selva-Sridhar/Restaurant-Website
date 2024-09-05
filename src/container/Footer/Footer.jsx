import React from 'react';
import {images} from "../../constants"
import { FiFacebook,FiTwitter,FiInstagram } from 'react-icons/fi';
import { FooterOverlay,Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='contact'>
    <FooterOverlay/>
    <Newsletter/>

    <div className='app__footer-links'>
      <div className='app__footer-links_contacts'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>151 SEVEN BRIDGE ROAD
          EAST STROUDSBURG</p>
        <p className='p__opensans'>1234567890</p>
        <p className='p__opensans'>0987654321</p>
      </div>
      <div className='app__footer-links_logos'>
        <img src={images.gericht} alt="footer_logo"/>
        <p className='p__opensans'>The best way to find yourself is to find yourself in the service of yourself.</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}}/>
        <div className='app__footer-links_icons'>
          <FiFacebook/>
          <FiTwitter/>
          <FiInstagram/>
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working hours</h1>
        <p className='p__opensans'>Monday - Friday</p>
        <p className='p__opensans'>10:00 am -02:00 am</p>
        <p className='p__opensans'>Saturday - Sunday</p>
        <p className='p__opensans'>10:00 am - 03:00 am</p>
      </div>
    </div>
    <div className='app__footer-copyrights'>
      <p className='p__opensans'>2021 Gericht. All Rights reserved.</p>

    </div>
  </div>
);

export default Footer;
