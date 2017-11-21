import React from "react";

import Image from "../Image";

export default class NavBrand extends React.Component {
    render() { 
    var brand, brandData = this.props.brandData;
        if(brandData.image){
            brand = <a className="navbar-brand pad-0" href={brandData.linkTo}>
                        <Image src={brandData.image} width="50px" alt={brandData.text} />
                    </a>;
        }
        else {
           brand = <a className="navbar-brand" href={brandData.linkTo}>{brandData.text}</a>;
        }
        return brand;
  }
}