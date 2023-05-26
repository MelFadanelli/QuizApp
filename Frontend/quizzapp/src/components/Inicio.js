
import React, { useState, useEffect } from "react";
import questionsData from './Dataquestions'
import { Form, Navigate } from "react-router-dom";
import '../styless/card.css'
import { withRouter, useNavigate } from "react-router-dom";
import UserContext from "./usercontext";


const Inicio=({setUser})=>
{
  //const [user, setUser]=useState("")
  const [userInput, setUserInput] = useState("");
    
    const currentDate = new Date().toLocaleString();

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        
        
        event.preventDefault(); // Prevent the default form submission behavior
        setUser(userInput)
        // Redirect to the Quizz component
        navigate("/Quizz");
        
      };
      const handleChange=(e)=>{
        
        setUserInput(e.target.value)
        
       
      };

      const toLeaderboard = (event) => {
        event.preventDefault();
        navigate("/Leaderboard")
      }

    return(
      
<>
<div className="card">
    <form onSubmit={handleSubmit}>
    <label>Usuario: </label>
    
    <input value={userInput} type="text" placeholder="Username" className="input" onChange={handleChange}></input>
    <div>
    <button type="submit"className="start">start</button>
    </div>
    </form>
</div>

<div>
  <button className="start" onClick={toLeaderboard}>leaderboard</button>
</div>

</>
)}

export default Inicio;
