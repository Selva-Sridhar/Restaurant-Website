import React from 'react';

import { AboutUs, Chef, FindUs, Footer,  Gallery,  Header, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

function App () {
  return(
    <><Navbar/>
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Gallery />
    <FindUs />
    <Footer />
    </>
  )
}

export default App;