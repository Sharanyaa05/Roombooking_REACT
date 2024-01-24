import React, { useState, useEffect } from "react";
import "./CreateAccount.css";
import { Navigate, useNavigate } from "react-router-dom";
function OwnerDatails() {
  const navigate=useNavigate()
  const [roomName, setRoomName] = useState("");
  const [roomLocation, setRoomLocation] = useState("");
  const [roomRant, setRoomRant] = useState();
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const handleLogin = () => {
    if (
      !roomName ||
      !roomRant ||
      !roomLocation ||
      !image
    ) {
      setError("Fill All Fields...");
    } else {
      const obj = {
        roomName: roomName,
        roomLocation: roomLocation,
        roomRant: roomRant,
        Image: image,
      };
      const exist=localStorage.getItem("Mycard");
      const data=exist?JSON.parse(exist):[];
      data.push(obj);
      localStorage.setItem("Mycard",JSON.stringify(data))
      alert("Details Added to localstorage..");
      navigate("/")
    }
  };
  useEffect(() => {
    const fetchData = () => {
      const existdata = localStorage.getItem("Mycard");
      const finaldata = existdata ? JSON.parse(existdata) : [];
      setData(finaldata);
    };

    fetchData();
  }, []); 
  const inputStyle = { width: "280px" };
  return (
    <div className="create-account-container">
      <div className="create-account-content">
        <h2 className="mb-4">Add Your Details Here..!</h2>
        <form>
          <input
            type="text"
            placeholder="Enter your Hotel Name"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3 me-3"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Hotel Location"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3"
            value={roomLocation}
            onChange={(e) => setRoomLocation(e.target.value)}
          />
          <br></br>
          <input
            type="number"
            placeholder="Enter your Room Rant"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3 me-3"
            value={roomRant}
            onChange={(e) => setRoomRant(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add your Image Path"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3 "
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
          <br />
          <p className="text-danger h6">{error}</p>
          <button
            onClick={handleLogin}
            style={inputStyle}
            className="p-2 border bg-success text-light border-light rounded mb-3"
          >
            Add Details
          </button>
        </form>
      </div>
      <br/>
    </div>
  );
}
export { OwnerDatails };