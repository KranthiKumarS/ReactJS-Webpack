import React from "react";
import FooterLinkItems from "./FooterLinkItems";
export default class FooterMenu extends React.Component {
  render() { 
    var links = this.props.links.map(function(link, i){
        return <div key={i}>
            <FooterLinkItems links={link.links} text={link.text} className={link.className}/>
          </div>  
    });
    return (
          <div >
           {links}
        </div>
    );
  }
}