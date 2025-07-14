import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfile, setIsProfile] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfile(!isProfile);
  };

  const handleLogout = async () => {
    try {
      await axios.get("https://fincrux.onrender.com/logout", {
        withCredentials: true,
      });
      window.location.href = "http://localhost:5173/"; // redirect to login
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const menuClass = {
    padding: "10px 20px",
    margin: "5px 0",
    cursor: "pointer",
    color: "#333",
  };

  const activeMenuClass = {
    ...menuClass,
    backgroundColor: "#e6f7ff",
    fontWeight: "bold",
    borderLeft: "4px solid #1890ff",
  };

  const logoutButtonStyle = {
    backgroundColor: "#ff4d4f",
    color: "white",
    border: "none",
    padding: "8px 16px",
    fontSize: "14px",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "20px",
    marginLeft: "20px",
  };

  // const logoStyle = {
  //   width: "50px",
  //   margin: "20px",
  // };

  return (
    <div className="menu-container">
      <img src="CompanyLogo.png" style={{width:"150px", height:"30px" , margin:"20px"}} alt="logo" />
      <div className="menus">
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(0)}>
              <p style={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/orders" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(1)}>
              <p style={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(2)}>
              <p style={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link to="/positions" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(3)}>
              <p style={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            {/* <Link to="/funds" style={{ textDecoration: "none" }} onClick={() => handleMenuClick(4)}>
              <p style={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link> */}
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick} style={{ padding: "10px 20px", cursor: "pointer" }}>
          <div className="avatar" style={{
            backgroundColor: "#1890ff",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
            marginBottom: "5px"
          }}>
            ZU
          </div>
          <p className="username" style={{ margin: 0 }}>USERID</p>
        </div>

        <button onClick={handleLogout} style={logoutButtonStyle}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
