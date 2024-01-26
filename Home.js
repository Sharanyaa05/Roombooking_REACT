import React from 'react'
import './Home.css';
import Navbar from './Navbar';
import Header from './Header';
import Featured from './Featured';
import ProtertyList from './ProtertyList';
import FeaturedProperties from './FeaturedProperties';
import MailList from './MailList';
import Footer from './Footer';

const Home = () => {
  return (
    <div >
    <Navbar/>
    <Header/>
    <div className='homeContainer'>
    <Featured/>
    <div className='homeTitle'>Browse by property type</div>
    <ProtertyList/>
    <h1 className='homeTitle'>Homes guests love</h1>
    <FeaturedProperties/>
    <MailList/>
    <Footer/>
    </div>
    </div>
  )
}

export default Home
