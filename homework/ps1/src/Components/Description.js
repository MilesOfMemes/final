import React from "react";

const Description = (props) => {
    return(
    <div class="information">  
        <a class="header">{props.randName}</a>
        <div class="meta">
            <span class="date">Joined in {props.randJoinDate}</span>
        </div>
        <div class="description">{props.randomDesc}</div>
    </div>  

    );
}

export default Description;