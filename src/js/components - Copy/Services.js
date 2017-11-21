import React from "react"
import ServicesData from "./data/ServicesData";

export default class Services extends React.Component{
render(){
var servicesinfo = ServicesData;
    return(
        <div>
                {
                    servicesinfo.servicesData.servicesLinks.map(function(item, i){
                        return <li key={i}  className="col-xs-12 col-sm-3 block block-shipping center-out-nb ">
                        <a href="#" className="info" >
                            <i className={item.icon}></i>
                            <div className="box-text"><span>{item.title}</span> <br/> <span>{item.description}</span></div>
                        </a>
                            </li>
                    })
                }
        </div>
    );
}
}