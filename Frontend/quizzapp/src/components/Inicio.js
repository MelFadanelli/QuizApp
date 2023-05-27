import React, { useState, useEffect } from "react";
import { Form, Navigate } from "react-router-dom";
import '../styless/card.css'
import { withRouter, useNavigate } from "react-router-dom";
import UserContext from "./usercontext";
import Preguntas from "../pages/preguntas";


const Inicio=({setUser, setPreguntas})=>
{
  //const [user, setUser]=useState("")
  const [userInput, setUserInput] = useState("");
  const[preguntasInput, setPreguntasInput]=useState(0);
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        
        
        event.preventDefault(); // Prevent the default form submission behavior
        setUser(userInput)
        setPreguntas(preguntasInput)
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

      const handleChangequest = (event) => {
      setPreguntasInput(parseInt(event.target.value));
      };

    return(
      
<>
<div className="card">
    <form onSubmit={handleSubmit}>
    <label>Usuario: </label>
    
    <input value={userInput} type="text" placeholder="Username" className="input" onChange={handleChange}></input>
    <div>
    <button type="submit"className="start">start</button>
    </div>
    <div>

      <label htmlFor="numberSelect">Question Select:</label>
      <select id="numberSelect" value={preguntasInput} onChange={handleChangequest}>
        {Array.from({ length: 15 }, (_, index) => index + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
    </form>
</div>

<div>
  <button className="start" onClick={toLeaderboard}>leaderboard</button>
</div>

</>
)}

export default Inicio;