import React from "react";

export default class Header extends React.Component {
    render () {
        return (
            <header className={this.props.className}>
                {this.props.children}
            </header>
        );
    }
}