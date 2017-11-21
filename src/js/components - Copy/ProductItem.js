import React from "react";
import Image from "./Image";
import Icon from "./Icon";
import Button from "./Button";
import Title from "./Title";
import Description from "./Description";
export default class ProductItem extends React.Component {
    render() {
        return (
           <div>
               
                <div className="product-item-info">        
                <div className="item-top"> <Image  src={this.props.imgSrc}/></div>
                <div className="product details product-item-details">
                <div className="inner-product">
                <Title className="price-home"><span className="normal">{this.props.prodTitle}</span></Title>
                <div className="product-reviews-summary"><div className="rating-summary"><Icon className="rating-result"></Icon></div></div>
                <Description><a href="#" className="product-item-link">{this.props.proddescription}</a></Description>
                <div className="actions-primary"><Button url={this.props.prodlink} className={this.props.addCartClass} ><span>{this.props.addToCartButton}</span></Button></div>
                </div>
                </div>
            
                </div>
            </div>
        );
    }
}