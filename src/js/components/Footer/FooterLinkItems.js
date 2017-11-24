import React from "react";
import FooterLinks from "./FooterLinks";
import Title from "../Title";
export default class FooterLinkItems extends React.Component {
  render() { 
    const style = {
      width: '25%',
      float : 'left',
     };
    var links = this.props.links.map(function(link, i){
      return   <div key={i}>
          <FooterLinks linkTo={link.linkTo} text={link.text} />
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