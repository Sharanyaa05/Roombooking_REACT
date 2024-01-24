import React from 'react'
import "./Featured.css"
const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Dublin</h1>
                <h2>531 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Austin</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" className='featuredImg'/>
            <div className='featuredTitles'>
                <h1>Remo</h1>
                <h2>533 properties</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
