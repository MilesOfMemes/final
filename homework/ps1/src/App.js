import React, { Component } from "react";
import Picture from "./Components/Picture";
import Description from "./Components/Description";
import NumberOfFriends from "./Components/NumberOfFriends";
import faker from "faker";

import "./App.css";
//import url("https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"); //is @import required?

//https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css



function App() {
  let randName = faker.name.findName();
    return (
      <div>
      <div>
        <head>
          <title>Title</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
        </head>

        <div class="card">
          <div>
            <Picture randomPicture={faker.image.avatar()} />

            <Description randomDesc={faker.random.words()} randName={faker.name.findName()} randJoinDate={faker.random.number({min:1996,max:2020})}/>
            
            <NumberOfFriends randomNum={faker.random.number({min:0,max:250})}/>
          </div>
        </div>

        <div>
          <Picture randomPicture={faker.image.avatar()}/>
          <Description randomDesc={faker.random.words()} randName={faker.name.findName()} randJoinDate={faker.random.number({min:1996,max:2020})}/>
          <NumberOfFriends randomNum={faker.random.number({min:0,max:250})}/>
        </div>


        <div>
          <Picture randomPicture={faker.image.avatar()}/>
          <Description randomDesc={faker.random.words()} randName={faker.name.findName()} randJoinDate={faker.random.number({min:1996,max:2020})}/>
          <NumberOfFriends randomNum={faker.random.number({min:0,max:250})}/>
        </div>
      </div>
      <div className="ui card">
      <div className="image">
        <img src="/images/avatar2/large/kristy.png"/>
      </div>
      <div className="content">
        <a className="header">Kristy</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
    </div>
    );
}


export default App;