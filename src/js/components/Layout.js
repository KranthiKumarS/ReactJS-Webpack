import React from "react";
import Editable  from "react-editable-div";
import update from 'immutability-helper';
// import update from 'react-addons-update';

import Column from "./Column";
import Container from "./Container"
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Row from "./Row";
import Dropdown from "./Dropdown";
import Header1 from "./Header.1";
import NavBar from "./NavBar/NavBar";
// import BsNavBar from "./BsNavBar";


import States from './src/components/States';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //  stateItem :{
      //     name: '',
      //     prefix: 'default',
      //     disable: ''
      //   },
      userData: {
        uname: 'Kranthi Kumar',
        user:{
          fname: 'Kranthi',
          lname: 'Kumar'
        }
      }
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    this.handlerChange= this.handlerChange.bind(this);
    this.submitHandler= this.submitHandler.bind(this);
  }

 
  changeTitle(title) {this.setState({title});
    
  }

  // handleChange(e) {
  //     const { name, value } = e.target;
  //     const { stateItem } = this.state;
  //       // this.setState({ [name]: value });
  //       this.setState({
  //           stateItem: {
  //               ...stateItem,
  //               [name]: value
  //           }
  //       });
  //   }

    // handleSubmit(e) {
    //   e.preventDefault();
    //   const { stateItem } = this.state;
    //   console.log(stateItem);
    // }
    
    // handlerChange(e) {
    //   const {name, value} =e.target;
    //   //const { uname } = this.state.userData;
    //   const { userData } = this.state;
    //   //const { user } = this.state.userData;

    //   const newData = update(userData, {
    //     uname: {$set: e.target.value},
    //     user: {fname: { $set: e.target.value}, lname: { $set: e.target.value}}
        
    //   });

    //   this.setState ({
    //     userData:{
    //      ...userData,
    //      newData,
          
    //     // [name]: value,
         
    //     //   user: {
    //     //     ...user,
    //     //   [name]: value,
    //     //   }
    //     }
    //   });      
    // }

    handlerChange(newPartialInput) {

      this.setState(state => ({
            ...state,
            userData: {
                ...state.userData,
                ...newPartialInput
            }
        }))
    }

    submitHandler(e){
      e.preventDefault();
      const { userData } = this.state;
      console.log(userData);

    }



  // onChange(e) {
  //     // Use either
  //     //console.log(e.target.value);
  //     // or:
  //     //console.log(this.refs.editable.getDOMNode().innerHTML);
  //     const title = e.target.value;
  //       this.changeTitle(title);
  // }

  render() {
    return (
      <div>
          {/* <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />  */}
         {/* <Header> */}
           {/* <Nav brand="" brandImage="images/globe.png"/>  */}
        {/* </Header>  */}
        <NavBar />
        {/* <BsNavBar /> */}
        <Container className="container">
          <Row>
            {/* <Column className="col-sm-6">
              <States label="States" searchable />
            </Column> */}
            {/* <Column className="col-sm-6">
              <Editable editable={this.state.editable}
                       html="<b>H</b>el<b>lo </b><i><b>W</b>or<b>l</b>d<b>!</b></i>"
                       ref="editable" onChange={this.onChange.bind(this)} />
            </Column> */}
            {/* <Column className="col-sm-12">
              <Dropdown title={this.state.name} />
              <Dropdown title={this.state.title} />
              <Dropdown title={this.state.test} />
            </Column> */}
            {/* <Column className="col-sm-12">
             <Header1 title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
            </Column> */}

            {/* <Column>
             <form onSubmit={this.handleSubmit}>
            <label>
              Add Item:
              <input type="text" value={this.state.stateItem.name} name='name' onChange={this.handleChange} className="form-control"/>
              <input type="text" value={this.state.stateItem.prefix} name='prefix' onChange={this.handleChange} className="form-control"/> 
               <input type="text" value={this.state.stateItem.disable} name="disable" onChange={this.handleChange} className="form-control"/>  
            </label><br/>
            <input type="submit" value="Submit" className="btn btn-primary"/>
          </form>
            </Column> */}

            <Column>
            <form onSubmit={this.submitHandler}>
              <label>User Form
               <input type="text" value={this.state.userData.uname} name="uname"  onChange={e => this.handleInputChange({uname: e.target.value})} className="form-control"/> 
              <input type="text" value={this.state.userData.user.fname} name="fname"  onChange={e => this.handleInputChange({fname: e.target.value})} className="form-control"/>
              <input type="text" value={this.state.userData.user.lname} name="lname"  onChange={e => this.handleInputChange({lname: e.target.value})} className="form-control"/>
               {/* <input type="text" value={this.state.userData.uname} name="uname"  onChange={this.handlerChange} className="form-control"/> 
              <input type="text" value={this.state.userData.user.fname} name="fname"  onChange={this.handlerChange} className="form-control"/>
              <input type="text" value={this.state.userData.user.lname} name="lname"  onChange={this.handlerChange} className="form-control"/> */}
              </label><br/>
              <input type="submit" value="Submit"  className="btn btn-primary"/>
              
            </form>
            </Column>



          </Row>
        </Container>
        
        <Footer />
      </div>
    );
  }
}

Layout.defaultProps = {
  userData: {
        uname: 'Kranthi Kumar',
        user:{
          fname: 'Kranthi',
          lname: 'Kumar'
        }
      }
};
