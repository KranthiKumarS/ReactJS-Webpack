import React from "react";

export default class FooterLinks extends React.Component {
  render() { 
    return(
      <li><a href={this.props.linkTo}>{this.props.text}</a></li>
    );
  }
}