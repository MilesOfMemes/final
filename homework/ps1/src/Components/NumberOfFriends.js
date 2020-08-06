import React from "react";

const NumberOfFriends = (props) => {
    return(
    <div class="numFriends">
        <a>
            <i class="user icon"></i>
            {props.randomNum} Friends
        </a>
  </div>
    );
}

export default NumberOfFriends;