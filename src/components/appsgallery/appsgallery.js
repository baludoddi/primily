import React from "react"
import './appsgallery.css'

const AppsGallery = ({ siteTitle }) => (
    <div className="container">
        <div className="row">
            <div className="col s12"><h3 className="center-align white-text h-style"> Our Mobile Application Gallery</h3></div>
        </div>
    <div className="row">
    <div className="col s4"></div>
        <div className="col s4 center-align">
        <div className="slider">
    <ul className="slides">
      <li>
        <img src={require("../../assets/images/iphone-w1.png")} /> 
      </li>
      <li>
        <img src={require("../../assets/images/iphone-w1.png")} /> 
      </li>
      <li>
        <img src={require("../../assets/images/iphone-w1.png")} />
      </li>
      <li>
        <img src={require("../../assets/images/iphone-w1.png")} />
      </li>
    </ul>
  </div>
        </div>
    </div>
</div>
)

export default AppsGallery
