import React from "react";
import "./Poster.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Poster = () => (
<div className="container-fluid" style={{backgroundColor: '#515151', height:250}}>
{/* Style to the word inside the poster */}
<div style={{fontSize: 70, color: 'white', textAlign: 'center',fontFamily: 'K2D'}}>Clicky Game!</div>
<div style={{fontSize: 20, color: 'white', textAlign: 'center',fontFamily: 'K2D'}}>Click on an image to earn points, but don't click on any more than once!</div>
</div>
);
export default Poster;