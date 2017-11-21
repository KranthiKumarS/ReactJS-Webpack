import React from "react";

import NavLink from "./NavLink";

export default class NavBrand extends React.Component {
  render() { 
   // var active = false;
    var links = this.props.links.map(function(link){
   
      return (
        <NavLink linkTo={link.linkTo} text={link.text} active={link.active} >
       
        </NavLink>
      );
    });
    return (
      <li className="dropdown">
 
        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          {this.props.text}
          
          <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">
          {links}
        </ul>
      </li>
    );
  }
}