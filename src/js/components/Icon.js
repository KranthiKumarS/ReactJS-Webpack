import React from "react";
export default class Icon extends React.Component {
    render() {
        return (
            <span className={this.props.className}>{this.props.children}</span>
        );
    }
}