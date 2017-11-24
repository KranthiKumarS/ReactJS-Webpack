import React from "react";
import Row from "../Row";
import Column from "../Column";
import Container from "../Container";
import FooterContainer from "./FooterContainer"
export default class Footer extends React.Component {
  render() {
    return (
      <footer className={this.props.className}>
          <Container className="container">
              <Row>
                <Column className="col-sm-12">
                <FooterContainer/>
                </Column>
              </Row>
            </Container>
      </footer>
    );
  }
}
