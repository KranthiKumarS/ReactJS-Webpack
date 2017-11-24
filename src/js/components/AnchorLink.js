import React from "react"
export default class AnchorLink extends React.Component{
    render(){
        return(
            <a href={this.props.linkurl} 
                id={this.props.linkId} 
                data-tab={this.props.datatoggle}
                className={this.props.className}>
                {this.props.children}
            </a>
        );
    }
}