import React from "react";
export default class Button extends React.Component {
    render() {
        return (
            <a title={this.props.title} href={this.props.url} className={this.props.className}>{this.props.children}</a>
        );
    }
}