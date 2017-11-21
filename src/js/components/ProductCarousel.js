import React from "react"
import ProductsItemData from "./data/ProductsItemData";
import ProductItem from "./ProductItem";

export default class ProductCarousel extends React.Component{
render(){
    const moreProducts = ProductsItemData;
    return(
        <div className="owl-carousel">
                 {
            moreProducts.products.productItem.map(function(item, i){
           return <div key={i} className="text-center item">          
           <ProductItem 
                imgSrc={item.productImage} 
                imgAlt={item.alt} 
                prodTitle={item.producttitle} 
                prodicon={item.prodicon} 
                proddescription={item.proddescription}
                prodlink={item.prodlink}
                addCartClass={item.addCartClass}
                addToCartButton={item.addToCartButton}> 
                </ProductItem>
           </div>

           
       })
       
   } 
                </div>
    );
}
}