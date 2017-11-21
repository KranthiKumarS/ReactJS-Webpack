import React from "react"
import HomeSliderData from "./data/HomeSliderData"
export default class HomeSlider extends React.Component {
render(){
    var homepageslider = HomeSliderData;
    return(
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox">
        {
                    homepageslider.homeslider.slideritems.map(function(item, i){
                        return <div key={i} className={item.className}><a href="#" ><img src={item.item} className="img-responsive" /></a></div>
                    })
                }
    </div>


  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
  </a>
    </div>
    );
}
} 