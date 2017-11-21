import React from "react";
import NavMenu from "./NavMenu";
import NavbarData from "./navbarData";

export default class AllCategoryNav extends React.Component {

  render() {
    var AllCategoryNav = NavbarData;
    return (
        <nav className="navbar navbar-inverse chandra">
          <NavMenu links={AllCategoryNav.NavbarData.links}/> 
        </nav>
    );
  }
}