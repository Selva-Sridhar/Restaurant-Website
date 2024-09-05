import React from 'react';
import  {SubHeading} from "../../components";
import {images} from "../../constants";
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='find'>
    <div className='app__wrapper_info'>
      <SubHeading title="contact"/>
      <h1 className='headtext__cormorant 'style={{margin:'3rem 0'}}>Find Us</h1>
      <div className='app__wrapper_content'>
        <p className='p__opensans' style={{marginBottom:'2rem'}}>
          151 SEVEN BRIDGE ROAD
          EAST STROUDSBURG
        </p>
        <p className='p__cormorant' style={{margin:'2rem 0',color:'#DCCA*&'}}>
          Opening Hours
        </p>
        <p className='p__opensans'>
          Mon-Fri:10:00 am -02:00 am
        </p>
        <p className='p__opensans'>
          Sat - Sun : 10:00 am - 03:00 am
        </p>
      </div>
      <button className='custom__button ' style={{margin:'2rem 0'}}>Visit Us</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='findus'/>
    </div>
  </div>
);

export default FindUs;
