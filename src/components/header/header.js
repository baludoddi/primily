import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="navbar-fixed nav-div">
  <nav className="blue">
    <div className="nav-wrapper container">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Features</a></li>
        <li><a href="badges.html">Describe</a></li>
        <li><a href="collapsible.html">Pricing</a></li>
        <li><a href="badges.html">Demo</a></li>
        <li><a href="collapsible.html">About Us</a></li>
      </ul>
    </div>
  </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
