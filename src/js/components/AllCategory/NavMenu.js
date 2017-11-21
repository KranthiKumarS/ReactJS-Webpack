import React from "react";
import NavLinkDropdown from "./NavLinkDropdown";

export default class NavMenu extends React.Component {
  render() { 
    var links = this.props.links.map(function(link){
      if(link.dropdown) {
        return (
          <NavLinkDropdown links={link.links} text={link.text} active={link.active} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav chandra">
        {links}
      </ul>
    );
  }
}