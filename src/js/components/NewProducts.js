import React from "react";
import ProductItem from "./ProductItem"
import TopProductsData from "./data/TopProductsData"
import Title from "./Title";
export default class NewProducts extends React.Component {
    render() {
        var moreProducts = TopProductsData;
        var mainheadertitle = topheadertitle;

        console.log(topheadertitle);
        return (
          <div className="home-product-slider nb-list products-grid">
               <div className="home-product-tab-title">
				
                <Title mainheaderheadertitle={this.headertitle.topheadertitle}></Title>
			</div>
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


</div>
            
        );
       
    }
}


  