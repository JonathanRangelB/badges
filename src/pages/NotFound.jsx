import React from "react";
import './styles/NotFound.css'
import image404 from '../images/error404.svg'

function NotFound() {
  return (
    <React.Fragment>
      <div className="image-container">
        <img className="image404" src={image404} alt="not found" />
      </div>
    </React.Fragment>
  );
}

export default NotFound;
