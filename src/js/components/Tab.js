import React from "react";
import Ul from "./Ul";
import TabInfo from "./TabInfo";
import TabDescription from "./TabDescription";
import TabData from "./data/TabData";
export default class Tab extends React.Component {
    render(){
        var procontenttab = TabData;
        return(
            <div >
                <Ul className="tabs">
                <div className="tab-carousel">
                    {
                        procontenttab.contenttab.tabdatainfo.map(function(item, i){
                            return  <div className="item" key={i} >
                            <TabInfo 
                            taburl={item.tabpath} 
                            anchortitle={item.tablink}
                            tabtoggle={item.tablink}
                            className={item.className}/>
                            </div>
                        })
                    }
                    </div>
                </Ul>
                <div>
                    {
                        procontenttab.contenttab.tabdatainfo.map(function(item, i){
                            return  <span key={i}>
                            <TabDescription tabdec={item.tabinformation} tabinfoid={item.tablink} className={item.tabclass}/>
                            </span>
                        })
                    }
                </div>
</div>
        );
    }
}