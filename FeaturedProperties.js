import React from 'react'
import "./FeaturedProperties.css"
const FeaturedProperties = () => {
  return (
    <div className='fp col-12 container'>
        <div className='fpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" className="fpImg"/>
        <div className='fpTitle'>
        <span className='fpName'>Apartment Stare Miasto</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from Rs.9000</span>
        </div>
        <div className='fpRanting'>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className='fpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" className="fpImg"/>
        <div className='fpTitle'>
        <span className='fpName'>Lemon Lacke</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from Rs.8000</span>
        </div>
        <div className='fpRanting'>
            <button>8.8</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className='fpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o=" className="fpImg"/>
        <div className='fpTitle'>
        <span className='fpName'>Epoques Rooms</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from Rs.9600</span>
        </div>
        <div className='fpRanting'>
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className='fpItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" className="fpImg"/>
        <div className='fpTitle'>
        <span className='fpName'>session Apartments</span>
        <span className='fpCity'>Madrid</span>
        <span className='fpPrice'>Starting from Rs.7000</span>
        </div>
        <div className='fpRanting'>
            <button>8.9</button>
            <span>Excellent</span>
            </div>
            </div>
        </div>
  )
}

export default FeaturedProperties
