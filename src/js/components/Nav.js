import React from "react";

import Image from "./Image";

export default class Nav extends React.Component {
    constructor(){
        super();
        
    }
    brand (){
        var brand;
        if(this.props.brand){
            brand = <a className="navbar-brand" href="#">{this.props.brand}</a>;
        }
        else {
            brand = <a className="navbar-brand pad-0" href="#">
                        <Image src={this.props.brandImage} width="50px" />
                    </a>;
        }
        return brand;
    }
    render () {
        const data = [{name:"link-11", id:1}, {name:"link-21", id:2}, {name:"link-3",id:3}, { name:"link-4", id:4}];
        const myStyle = "active";
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                {this.brand()}
              </div>
          
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">Link</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                        {
                            data.map(function(item, i){
                                return <li key={i}><a href="#" className={myStyle}>{item.name} {myStyle}</a></li>
                            })
                        }
                    </ul>
                  </li>
                </ul>
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                  <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Link</a></li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}