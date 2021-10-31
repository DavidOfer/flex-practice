
import React from 'react';
import ServicesArea from '../ServicesArea/ServicesArea';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function Layout() {
  return (
    <div>
      <Header />
      <Banner/>
      <About/>
      <ServicesArea/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default Layout;
