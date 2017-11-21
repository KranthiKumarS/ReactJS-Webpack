import React from "react"

export default class TopHeader extends React.Component{
    render(){
        return(
            <div>
               {this.props.children} 
            </div>
        );
    }
}