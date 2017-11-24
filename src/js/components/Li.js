import React from "react"

export default class Li extends React.Component {
    render(){
        return(
            <li className={this.props.className} >
            {this.props.children}
            </li>
        )
    }
}