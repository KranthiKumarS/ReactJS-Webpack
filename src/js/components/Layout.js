import React from "react";

import Column from "./Column";
import Container from "./Container"
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Row from "./Row";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to react world!",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        {/* <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />*/}
        <Header>
          <Nav brand="" brandImage="images/globe.png"/>
        </Header>
        <Container className="container">
          <Row>
            <Column className="col-sm-6">
              This is col-6 component;
            </Column>
            <Column className="col-sm-6">
              This is col-6 component;
            </Column>
          </Row>
        </Container>
        
        <Footer />
      </div>
    );
  }
}
