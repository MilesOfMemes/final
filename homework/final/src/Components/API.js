import React, {useContext, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import {NameContext} from "./NameContext";
import axios from 'axios';

const Title = styled.h1`
font-size: 1.5em;
text-aligned: center;
color: indianred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background-color: lightcyan
`;

const Name = styled.section`
  padding: 1em;
  background-color: lightcyan
`;

const Img = styled.img`
  height:70%;
  margin: 10px;
  border-radius: 10px;
  border: 3px solid lightcyan; 
  &:hover {
    border: 3px solid black; 
  }; 
`

const Type = styled.div`
position: center;
  width: 5%;
  margin: 0 auto;
  text-aligned: center;
  display: inline-block;
  color: black;
  font-size: 1em;
  padding: 0.30em 1em;
  border: 2px solid lightcyan;
  border-radius: 10px;


  background-color: ${(props) => props.inputColor};
  border: 2px solid ${(props) => props.inputColor}; 
`
//(props) => props.inputColor



class API extends React.Component {
    state = {
        name: "yeet",
        sprite: "wheat",
        type: [],
        favorites: []
    }

GetTypeColor = (props) => {
    console.log(props.type.name);
    switch(props.type.name){
        case "normal":
            return "darkkhaki";

        case "fire":
            return "orange"
        
        case "water":
            return "cornflowerblue";
        
        case "grass":
            return "limegreen";
        
        case "electric":
            return "yellow";
        
        case "ice":
            return "lightblue";
        
        case "fighting":
            return "red";
        
        case "poison":
            return "mediumorchid";
        
        case "ground":
            return "tan";
        
        case "flying":
            return "plum";
        
        case "psychic":
            return "pink";
        
        case "bug":
            return "olivedrab";
        
        case "rock":
            return "darkgoldenrod";

        case "ghost":
            return "mediumpurple";
        
        case "dark":
            return "brown";
        
        case "dragon":
            return "darkorchid";

        case "steel":
            return "gray";
        
        case "fairy":
            return "lightpink";
    }

    
}

postHandle = () => {
    console.log("yee haw");
    axios.post("https://fir-app-7a218.firebaseio.com/pokemon.json",{
      pokemon: {
        name: this.state.name,
        sprite: this.state.sprite,
        type: this.state.type
      },
    })
    .then((res) => {
        this.setState(previousState => ({
            favorites: [...previousState.favorites, this.state.name]
        }));
      //this.state.favorites = [this.state.name]
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getHandle = () => {
    axios.get("https://fir-app-7a218.firebaseio.com/pokemon.json",{
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  verifyFavorite = () => {
    const name = this.state.name;
    var newFavorite = true;
    this.state.favorites.forEach(function(x){
        if(x == name){
            alert("Error, this Pokemon is already in your favorites.");
            newFavorite = false;
        }
        console.log(x);
    })

    if(newFavorite == true){
        this.postHandle();
    }
    
  }
  


//max num of pokemon is 807
GetRandomPokemon = () => {
    var randomID = Math.floor((Math.random() * 807) + 1);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randomID}/`,{
    })
    .then((res) => {
    console.log(res);
      this.setState({
        name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
        sprite: res.data.sprites.front_default,
        type: res.data.types
      })
    })
    .catch((err) => {
      console.log(err);
    })
}

componentDidMount() {
    
    this.GetRandomPokemon();
 }


render(){
    
    return(
        
        <Wrapper>
        <div className="App">
            <Title>Pokemon API</Title>
            <button onClick={this.GetRandomPokemon}>Get Random Pokemon</button>
            <div>
                <Img src={this.state.sprite} onerror={"this.src='../Images/transparentImage.png'"} alt={"A random pokemon"}/>
            </div>
    
            <div>
                {this.state.type.map((type) => {
                    {}
                    return(
                        <Type inputColor={this.GetTypeColor(type)}> {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1) + " " }</Type>
                    );
                })}
            </div>

            <Name>
            <div>{this.state.name}</div>
            </Name>
            
            
            <button onClick={() => this.verifyFavorite()}>Add to your Favorites</button>
            
        </div>
        </Wrapper>
    ); 
}  
}
export default API;