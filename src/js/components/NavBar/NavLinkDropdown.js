import React from "react";
import NavLink from "./NavLink";
import Title from "../Title";
export default class NavLinkDropdown extends React.Component {
  render() { 
    const style = {
      width: '25%',
      float : 'left',
     };
    var links = this.props.links.map(function(link, i){
      return   <div key={i}>
          <NavLink linkTo={link.linkTo} text={link.text} />
       </div>
     
    });
    return (
     <div style={style}>
        <Title> {this.props.text}</Title>
        {links} 
     </div>
     
    );
  }
}