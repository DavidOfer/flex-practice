
import React from 'react';
import ServicesArea from './ServicesArea/ServicesArea';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './About';

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
