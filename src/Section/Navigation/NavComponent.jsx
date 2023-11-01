import { color } from "framer-motion";
import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./NavComponent.css";

function NavComponent({ to }) {
    const [Active, setActive] = useState('/');
    console.log(Active);
  return (
    <div className="NavComponent">
      <div className="Navtxt">
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "#862df4" } : {};
          }}
          to={to.replace(/\s/g, "").toLowerCase()}
          onClick={() => setActive(to)}
        >
          {to.replace("/", "") ? to.replace("/", "") : "Home"}
        </NavLink>
      </div>
      <div className="Navborder" style={Active ? {borderBottom:"20px Solid #492"}:{color:"#875"}}></div>
    </div>
  );
}

export default NavComponent;
