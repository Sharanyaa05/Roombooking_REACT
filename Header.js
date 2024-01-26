import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const handleLogin = () => {
    navigate("/Signin");
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotelid", { state: { destination, date, options } });
  };
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOPtion = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "ins" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="headerContainer container">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
            <span>Fights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi}></FontAwesomeIcon>
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle text-start">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc text-start">
              Get rewarded for your travels - unlock instant savings of 10% or
              more than with a free Roombooking account
            </p>
            <button className="headerBtn ml-auto" onClick={handleLogin}>
              Sign in/ Register
            </button>
            <div className="headerSearch d-flex col-md-12 col-placeholder-none">
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faBed}
                  className="headerIcon"
                ></FontAwesomeIcon>
                <input
                  type="text"
                  placeholder="where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                ></input>
              </div>
              <div className="headerSearchItem ">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerIcon"
                ></FontAwesomeIcon>
                <span
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                  className="headersearchText"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem ">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headerIcon"
                ></FontAwesomeIcon>
                <span
                  onClick={() => {
                    setOpenOption(!openOption);
                  }}
                  className="headersearchText"
                >{`${options.adult} Adult . ${options.children} Children . ${options.room} Room`}</span>
                {openOption && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOPtion("adult", "dec")}
                          disabled={options.adult <= 1}
                        >
                          -
                        </button>
                        <button className="optionCounterNumber">
                          {options.adult}
                        </button>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOPtion("adult", "ins")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOPtion("children", "dec")}
                          disabled={options.children <= 0}
                        >
                          -
                        </button>
                        <button className="optionCounterNumber">
                          {options.children}
                        </button>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOPtion("children", "ins")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOPtion("room", "dec")}
                          disabled={options.room <= 1}
                        >
                          -
                        </button>
                        <button className="optionCounterNumber">
                          {options.room}
                        </button>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOPtion("room", "ins")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem ">
                <button className="headerBtn p-1" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
