import React from "react";

import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import NavbarData from "./navbarData";


export default class NavBar extends React.Component {
  
  render() {
    var navbar = NavbarData;
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavBrand brandData={navbar.NavbarData.brand}  />
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
             <NavMenu links={navbar.NavbarData.links} /> 
          </div>
        </div>
      </nav>
    );
  }
}
