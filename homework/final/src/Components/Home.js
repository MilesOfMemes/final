import React, {useContext, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import {NameContext} from "./NameContext";


const Title = styled.h1`
  font-size: 1.5em;
  text-aligned: center;
  color: indianred;
`;

const Wrapper = styled.section`
  padding: 1em;
  background-color: lightcyan
`;

const Introduction = styled.div`
    text-aligned: center;
`;



function Home() {

    return(
    
    <Wrapper>

    <div className="App">
        <Title>CS 4903 - Web Frameworks </Title>
        <Title>Final Project</Title>
        <Title>Miles Mason</Title>

    </div>

    </Wrapper>
    );
}

export default Home;