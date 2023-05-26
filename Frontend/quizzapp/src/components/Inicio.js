
import React, { useState, useEffect } from "react";
import { Form, Navigate } from "react-router-dom";
import '../styless/card.css'
import { withRouter, useNavigate } from "react-router-dom";
import UserContext from "./usercontext";


const Inicio=({setUser})=>
{
  //const [user, setUser]=useState("")
  const [userInput, setUserInput] = useState("");
    


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

      const options = Array(15).fill().map((_, i) => i+1);
      const [selectedOption, setSelectedOption] = useState(options[0].value);

    return(
      
<>
<div className="card">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario: </label> 
        <input value={userInput} type="text" placeholder="Username" className="input" onChange={handleChange}></input>
      </div>
      <div>
        <label>Select # of questions</label> 
        <select
        style={{height: 50, width: 80, fontSize:25, margin:10}}
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}>
        {options.map(o => (
          <option style={{fontSize:25}} key={o} value={o}>{o}</option>
        ))}
        </select>
      </div>
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
