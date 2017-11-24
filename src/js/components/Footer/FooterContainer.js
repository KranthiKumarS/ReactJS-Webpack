import React from "react";
import FooterMenu from "./FooterMenu";
import FooterData from "../Data/FooterData";
export default class FooterContainer extends React.Component{
    render(){
        var navbar = FooterData;
        return(
            <div>
                 <FooterMenu links={navbar.FooterData.links} />   
            </div>
        );
    }
}