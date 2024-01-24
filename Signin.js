import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [accountType, setAccountType] = useState("customer");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const inputStyle = { width: "280px" };
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedData = localStorage.getItem("Mydata");
    
    if (!storedData) {
      setError("No user data found");
      return;
    }
    const enteredUsername = username;
    const enteredPassword = password;
    const enterAccountType = accountType;

    const exist=localStorage.getItem("Mydata");
    const getdata=exist?JSON.parse(exist):[];
    const user= getdata.find((e)=>
        e.Firstname === enteredUsername &&
        e.Newpassword === enteredPassword &&
        e.AccountType === enterAccountType
    );
  
    if (user) {
      if (accountType === "customer") {
        navigate("/");
      } else if (accountType === "owner") {
        navigate("/ownerDetails");
      }
    } else {
      setError("No user data found");
    }
  };

  const handleCreate = () => {
    navigate("/createaccount");
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <form>
          <input
            type="text"
            placeholder="Enter your Username/Email"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Enter your Password Correctly"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <select
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="owner">Owner</option>
          </select>
          <br></br>
          <p className="text-danger h6">{error}</p>
          <button
            style={inputStyle}
            className="p-2 border bg-success text-light border-light rounded mb-3"
            onClick={handleLogin}
          >
            Login
          </button>
          <br></br>

          <button
            onClick={handleCreate}
            className="ml-end"
            style={{
              border: "none",
            }}
          >
            Create an Account{"  "}
            <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
          </button>
        </form>
      </div>
    </div>
  );
}

export { Signin };