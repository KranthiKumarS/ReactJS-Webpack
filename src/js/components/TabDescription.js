import React from "react"

export default class TabDescription extends React.Component{
render(){
return(
    <div className={this.props.className} id={this.props.tabinfoid}><h1>{this.props.tabdec}</h1></div>
);
}
}