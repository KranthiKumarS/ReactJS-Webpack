import React from "react";
import Editable  from "react-editable-div";

import Column from "./Column";
import Container from "./Container"
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Row from "./Row";
import Dropdown from "./Dropdown";
import Header1 from "./Header.1";
import NavBar from "./NavBar/NavBar";
import BsNavBar from "./BsNavBar";


import States from './src/components/States';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome to react world!!",
      title: "Welcome to react Title!!DDDD",
      test: "Welcome to react Test!!",
    };
  }

  changeTitle(title) {this.setState({title});
    
  }
 
  onChange(e) {
      // Use either
      //console.log(e.target.value);
      // or:
      //console.log(this.refs.editable.getDOMNode().innerHTML);
      const title = e.target.value;
        this.changeTitle(title);
  }

  render() {
    return (
      <div>
          {/* <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />  */}
         {/* <Header> */}
           {/* <Nav brand="" brandImage="images/globe.png"/>  */}
        {/* </Header>  */}
        <NavBar />
        <BsNavBar />
        <Container className="container">
          <Row>
            <Column className="col-sm-6">
              <States label="States" searchable />
            </Column>
            <Column className="col-sm-6">
              <Editable editable={this.state.editable}
                       html="<b>H</b>el<b>lo </b><i><b>W</b>or<b>l</b>d<b>!</b></i>"
                       ref="editable" onChange={this.onChange.bind(this)} />
            </Column>
            <Column className="col-sm-12">
              <Dropdown title={this.state.name} />
              <Dropdown title={this.state.title} />
              <Dropdown title={this.state.test} />
            </Column>
            <Column className="col-sm-12">
             <Header1 title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
            </Column>
          </Row>
        </Container>
        
        <Footer />
      </div>
    );
  }
}
