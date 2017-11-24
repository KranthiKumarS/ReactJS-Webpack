import React from "react";
import Icon from "./Icon";
import AnchorLink from "./AnchorLink";
import SocialMediaData from "./data/SocialMediaData";
import Ul from "./Ul";
import Li from "./Li";
export default class SocialMedia extends React.Component{
    render(){
        var socialmedialinks = SocialMediaData;
        return(
            <div className="follow-us">
            <Ul>
                {
                    socialmedialinks.socialmedia.socialmedialinksdata.map(function(item, i){
                        return <Li key={i} >
                        <AnchorLink linkurl={item.link} className="circle spin"> 
                        <Icon className={item.className}/>
                         </AnchorLink>  
                        
                        </Li>
                    })
                }
                  
              
            </Ul>
            </div>
        );
    }
}