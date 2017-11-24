import React from "react";
import Li from "./Li";
import TabAnchorLink from "./TabAnchorLink"
export default class Tab extends React.Component {
    render(){
        return(
          
                <Li><TabAnchorLink 
                linkurl={this.props.taburl} 
                className={this.props.className} 
                linktitle={this.props.anchortitle} 
                linkId={this.props.anchorid} 
                datatoggle={this.props.tabtoggle}/></Li>
          
        );
    }
}