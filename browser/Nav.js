import React from 'react';
import {Link} from 'react-router-dom'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const Nav = ()=>(
  <div className="nav">
    <div className="nav-col-left">
      <div id="home-link">
        Food Drive A Tron
      </div>
    </div>
    <div className="nav-col-right">
      <div className="dropdown">
        <button className="dropbtn">
          <div className="nav-icon"></div>
          <div className="nav-icon"></div>
          <div className="nav-icon"></div>
        </button>
        <div className="dropdown-content">
          <Link to={'/'} className="link" id="menu-link">ORGANIZE</Link>
          <Link to={'/volunteer'} className="link" id="menu-link">VOLUNTEER</Link>
        </div>
      </div>

    </div>
  </div>
)

export default Nav;

