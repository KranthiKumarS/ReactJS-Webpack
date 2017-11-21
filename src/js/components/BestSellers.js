import React from "react";
import ProductItem from "./ProductItem";
import ProductsItemData from "./data/ProductsItemData";

export default class BestSellers extends React.Component {
    render() {
        var productsitems = ProductsItemData;
        console.log(productsitems)
        return (
            
            <div>
              
    <h3>Best Seller</h3>
   
   <div className="owl-carousel">
                 {
            productsitems.products.productItem.map(function(item, i){
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
            </div>
            
        );
       
    }
}


  