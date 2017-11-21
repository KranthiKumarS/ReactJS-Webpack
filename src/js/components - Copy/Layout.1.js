import React from "react";
// import Editable  from "react-editable-div";

import Column from "./Column";
import Container from "./Container"
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Row from "./Row";
import Dropdown from "./Dropdown";
import Header1 from "./Header.1";
import NavBar from "./NavBar/NavBar";
import TopHeader from "./TopHeader";



import States from './src/components/States';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      dataform :{
        firstname : 'chandra',
        lastname : 'sekhar',
        mobileno : '8790321168'
      }  
    }
    this.handelChange = this.handelChange.bind(this);
  }

  handelChange(event) {
    const { name, value} = event.target;
    const {dataform} = this.state;
    this.setState({
      dataform: {
        ...dataform,
        [name] : value
      }
    });
  }


  render() {
    return (
      <div>
        <div className="top-header">
        <Container className="container">
          <Row>
            <Column className="col-sm-6">
        <TopHeader > 
        {/* <States label="States" searchable /> */}
        <form>
          <input type="text" name="firstname" value={this.state.dataform.firstname} onChange={this.handelChange} className="form-control" />
          <input type="text" name="lastname" value={this.state.dataform.lastname} onChange={this.handelChange} className="form-control" />
          <input type="text" name="mobileno" value={this.state.dataform.mobileno} onChange={this.handelChange} className="form-control" />
          <input type="submit" value="Submit" className="form-control btn btn-primary" />
        </form>
        </TopHeader>
        </Column>

        <Column className="col-sm-6">
        <TopHeader />
        </Column>
        </Row>
        </Container>
        </div>
          {/* <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />  */}
         {/* <Header> */}
           {/* <Nav brand="" brandImage="images/globe.png"/>  */}
        {/* </Header>  */}
        <NavBar />
   
        {/* <Container className="container">
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
        </Container> */}
        
        <Footer />
      </div>
    );
  }
}
