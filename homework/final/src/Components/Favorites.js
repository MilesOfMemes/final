import React, {useContext} from "react";
import {NameContext} from "./NameContext"; 
import styled, {ThemeProvider} from "styled-components";

const Img = styled.img`
  height:70%;
  margin: 10px;
  border-radius: 10px;
  border: 3px solid lightcyan; 
  &:hover {
    border: 3px solid black; 
  }; 
  display: inline-block;
`
const Title = styled.h1`
font-size: 1.5em;
text-aligned: center;
color: lightseagreen;
`;

const Wrapper = styled.section`
  padding: 1em;
  background-color: mistyrose
  display: inline-block;
`;


function Favorites() {
  
    // Note, the intended functionality of the page was to have it retrive data stored on a database. 
    // However, I was unable to get it to function properly in time for the due date. 
    // I have created a mock-up of what I would like it to look like. 

    return(
        <Wrapper>
            <div className="App"> 
                <Title>Favorite Pokemon</Title>


                <div></div>
                <Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png"}/>
                 
                <div>Dialga</div>

                <Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"}/>
                <div>Pikachu</div>

                <Img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png"}/>
                <div>Froakie</div>
                
            </div>
        
        </Wrapper>
  
    );
}

export default Favorites;