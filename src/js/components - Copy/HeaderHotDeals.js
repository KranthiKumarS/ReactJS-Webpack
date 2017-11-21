import React from "react"

export default class HeaderHotDeals extends React.Component {

    render(){
        const hotDeals = {
           hotDealIcon : "../images/globe.png",
           hotDealLinks : [
            {name:"Samsung Smart phone 20% OFF", id:1}, 
            {name:"Hot deal from Printer", id:2}, 
            {name:"Haki Women Fashion 50% OFF",id:3}, 
            {name:"Daniel Wellington watch - Hot trend 2016", id:4}
        ]};
        return(
                <div className="navigation">
                        {
                           
                            /*<img src={hotDeals.hotDealIcon} />*/
                        }
                        
                    <ul className="box-static-link">
                    <div className="icon"><span>Hot Deals</span></div>
                        {
                            hotDeals.hotDealLinks.map(function(item, i){
                                return <li key={i}><a href="#" >{item.name}</a></li>
                            })
                        }
                    </ul>
                </div>
        )
    };

}