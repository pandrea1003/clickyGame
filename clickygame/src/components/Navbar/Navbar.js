import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item


const Navbar = props => (
  <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#551A8B', color: 'white', fontFamily: 'K2D'}}>
    <span className="navbar-text order-0">
    Clicky Game              
  </span>
  <span className="navbar-text mx-auto">
    Click an image to begin!
  </span>
  <span className="navbar-text score" style={{position: 'left'}}>
  Score: {props.score.points} | Top Score: {props.score.topScore}
  </span>
  </nav>
);

export default Navbar;