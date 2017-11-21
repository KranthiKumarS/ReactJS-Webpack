import React from "react"

export default class Tab extends React.Component {
    render(){
        return(
            <div>





  <ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="#home" data-toggle="tab">Home</a></li>
    <li role="presentation"><a href="#profile" data-toggle="tab">Profile</a></li>
    <li role="presentation"><a href="#messages" data-toggle="tab">Messages</a></li>
    <li role="presentation"><a href="#settings" data-toggle="tab">Settings</a></li>
  </ul>


  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="home">content1</div>
    <div role="tabpanel" class="tab-pane" id="profile">content2</div>
    <div role="tabpanel" class="tab-pane" id="messages">content3</div>
    <div role="tabpanel" class="tab-pane" id="settings">content4</div>
  </div>

</div>
        );
    }
}