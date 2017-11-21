import React from "react";
export default class Description extends React.Component {
    render() {
        return (
            <div title={this.props.title} className={this.props.className} >{this.props.children}</div>
        );
    }
}