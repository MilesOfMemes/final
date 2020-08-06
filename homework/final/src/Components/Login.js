import React, {useContext, useState} from "react";
import styled, {ThemeProvider} from "styled-components";
import {NameContext} from "./NameContext";

const Img = styled.img`
  height:70%;
  margin: 10px;
  border-radius: 10px;
  border: 3px solid mistyrose; 
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
function getInputHandle(e){
    this.setState({
      text: e.target.value,
    });
    console.log(this.state.text);
  };

  function checkInformation(accountName, accountPassword, userName, password){
    if(userName == accountName && password == accountPassword){
        alert("Successful Login");
    }
    else{
        alert("Invalid Login");
    }
    
}

function Login() {
  

    const [accountPassword,setAccountPassword] = useState("password");
    const [accountName,setAccountName] = useState("user");
    const [password, setPassword] = useState("")
    const [user, setUser] = useState("")
    return(
            <Wrapper>
        
            <div className="App">
                <div>Login</div>
               <input onChange={(e) => setUser(e.target.value)}></input>
            </div>
            <div className="App">
               <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
               {console.log(user)}
               {console.log(password)}
            </div>
            <div className="App">
                <button onClick={() => checkInformation(accountName, accountPassword, user, password)}>Login</button>
        
            </div>
        
            </Wrapper>
    );
}

export default Login;