import React from "react";
import {NavLink} from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <NavLink to="/sub">sub-Urban Search</NavLink>
      <NavLink to="/library">Urban Library</NavLink>
      <NavLink to="/cohort">east-se-103122-b-Ginny</NavLink>
      <NavLink to="/addTerm">Contribute to The Minds of Yesterday's Tomorrow</NavLink>
    </nav>
    );
} 

export default NavBar;