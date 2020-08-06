import React from "react";

const Picture = (props) => {
    return(
        <div className="image">
            <img src={props.randomPicture} width="400" height="400"/>
        </div>
    );
}

export default Picture;