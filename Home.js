import React from 'react'
import './Home.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Featured from './Components/Featured';
import ProtertyList from './Components/ProtertyList';
import FeaturedProperties from './Components/FeaturedProperties';
import MailList from './Components/MailList';
import Footer from './Components/Footer';

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