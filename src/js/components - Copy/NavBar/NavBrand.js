import React from "react";

import Image from "../Image";

export default class NavBrand extends React.Component {
    render() { 
    var brandlogo, brandData = this.props.brandData;
    brandlogo =  <Image src={brandData.image} width="50px" alt={brandData.text} />
    return brandlogo;
  }
}