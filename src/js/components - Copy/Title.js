import React from "react";
export default class Title extends React.Component {
    render() {
        return (
            <h1 title={this.props.title} className={this.props.className} >{this.props.children}</h1>
        );
    }
}