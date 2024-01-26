import React, { useState,useEffect } from 'react'
import {format} from "date-fns";
import './List.css';
import Navbar from './Navbar'
import Header from './Header'
import { useLocation, useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import SearchItem from './SearchItem';
import Hotel from './Hotel';
const List = () => {

  const location=useLocation()
  const [destination,setDestination]=useState(location.state.destination);
  const [openDate,setOpenDate]=useState(false)
  const [date,setDate]=useState(location.state.date);
  const [options,setOptions]=useState(location.state.options);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const existdata = localStorage.getItem("Mycard");
      const finaldata = existdata ? JSON.parse(existdata) : [];
      setData(finaldata);
    };

    fetchData();
  }, []); 

  const handleSearch = (roomLocation) => {
    const filteredData = data.filter((item) => item.roomLocation === destination);
    setData(filteredData);
  };
  return (
    <div>
     <div>
    <Navbar/>
    <Header type = "list"/>
    <div className='listContainer'>
      <div className='listWrapper container'>
        <div className='listSearch'>
          <h1 className='listTitle'>Search</h1>
          <div className='listItem'>
            <label className='fw-bold'>Description</label>
            <input type="text" value={destination}/>
          </div>
          <div className='listItem'>
            <label className='fw-bold'>Check-in Date</label>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate ,"MM/dd/yyyy")}`}</span>
            { openDate && (<DateRange onChange={(item)=>setDate([item.selection])} minDate={new Date()}  ranges={date}></DateRange>)}
          </div>
          <div className='listItem'>
            <label className='fw-bold'>Options</label>
           <div className='listOptionItem'>
            <span className='listOptionText'>Adult<small> Per night</small></span>
            <input type="number" min={1} placeholder={options.adult} className='listOptionInput'/>
           </div>
           <div className='listOptionItem'>
            <span className='listOptionText'>Children<small> Per night</small></span>
            <input type="number" min={0} placeholder={options.children} className='listOptionInput'/>
           </div>
           <div className='listOptionItem'>
            <span className='listOptionText'>Room<small> Per night</small></span>
            <input type="number" min={1} placeholder={options.room}  className='listOptionInput'/>
           </div>
          </div>
        <button onClick={handleSearch}>Search</button>
        </div>
        <div className='listResult'>
        {data.map((item, index) => (
            <SearchItem key={index} roomData={item} handleSearch={handleSearch}/>
          ))}
          </div>
          

        </div>
    </div>
    </div>
    </div>
  )
}

export default List;
