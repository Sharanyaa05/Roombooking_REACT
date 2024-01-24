import { useNavigate } from "react-router-dom";
import "./SearchItem.css"
const SearchItem = ({roomData, handleSearch}) => {
  const navigate=useNavigate()
  const handleGo=()=>{
    handleSearch(roomData.roomLocation);

    navigate(`/hotel/${roomData.roomName}/${roomData.roomLocation}/${roomData.roomRant}`);

  }

  return (
    <div className="searchItem">
      <img
        src={roomData.Image}
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siName">{roomData.roomName}</h1>
        <span className="siLocation">{roomData.roomLocation}</span>
        <span className="siTaxiOp">Free taxi to your location</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{roomData.roomRant}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleGo}>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;