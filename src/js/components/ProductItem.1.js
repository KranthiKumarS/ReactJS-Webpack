import React from "react";
import Image from "./Image";
import Icon from "./Icon";
import Button from "./Button";
import Title from "./Title";
import Description from "./Description";
import ProductsItemData from "./data/ProductsItemData"
export default class ProductItem extends React.Component {
    render() {
        var moreProducts = ProductsItemData;
        return (
            <div className="col-sm-3 text-center">
                 {
                     
                moreProducts.products.productItem.map(function(item){
              return <div>        
              <Image src={item.productImage} alt={item.alt}/>
              <Title>{item.price}</Title>
              <Icon className={item.className}></Icon>
              <Description>{item.description}</Description>
              <Button url={item.href} className={item.className} >{item.button}</Button>
                        </div>
                    })
                }
            
                
            </div>
        );
    }
}