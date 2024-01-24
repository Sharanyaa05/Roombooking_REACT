import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const inputStyle = { width: "280px" };
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("customer");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !newPassword ||
      !rePassword
    ) {
      setError("Fill in all the fields.");
    } else if (newPassword !== rePassword) {
      setError("Re-entered password should be the same as the password.");
    } else if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      setError("Check your Phone Number format.");
    } else {
      const newUser = {
        Firstname: firstName,
        Lastname: lastName,
        Email: email,
        Phonenumber: phoneNumber,
        Newpassword: newPassword,
        Repassword: rePassword,
        AccountType: accountType,
      };
      const exist=localStorage.getItem("Mydata");
      const data=exist?JSON.parse(exist):[];
      data.push(newUser)
      localStorage.setItem("Mydata",JSON.stringify(data));
      alert("Successfully Created an Account!");
      if (accountType === "customer") {
        navigate("/");
      } else if (accountType === "owner") {
        navigate("/ownerDetails");
      }
    }
  };
  return (
    <div className="create-account-container">
      <div className="create-account-content">
        <h2 className="mb-4">Create your Own Account Here..!</h2>
        <form>
          <input
            type="text"
            placeholder="Enter your First Name"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3 me-3"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br></br>
          <input
            type="email"
            placeholder="Enter your Emailid"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3 me-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter your Phonenumber"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Create a Password"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3 me-3"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Re-Enter your Password Correctly"
            style={inputStyle}
            className="p-2 border border-dark rounded mb-3"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          <br />
          <label className="ms-4">
            <input
              type="radio"
              name="accountType"
              value="customer"
              checked={accountType === "customer"}
              onChange={() => setAccountType("customer")}
            />
            Customer
          </label>
          <br></br>
          <label className="ms-4">
            <input
              type="radio"
              name="accountType"
              value="owner"
              checked={accountType === "owner"}
              onChange={() => setAccountType("owner")}
            />
            Owner
          </label>
          <br></br>
          <br></br>
          <p className="text-danger h6">{error}</p>
          <button
            onClick={handleLogin}
            style={inputStyle}
            className="p-2 border bg-success text-light border-light rounded mb-3"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export { CreateAccount };