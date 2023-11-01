import React from 'react'
import NavComponent from './NavComponent'
import "./NavComponent.css";

function Navigations() {
  return (
    <div className="navwrapper">
      <NavComponent to="/"/>
      <NavComponent to="/Case study"/>
      <NavComponent to="/Process"/>
      <NavComponent to="/Contact"/>
    </div>
  )
}

export default Navigations