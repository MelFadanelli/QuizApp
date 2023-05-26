
import React, { useState, useEffect } from "react";
import questionsData from './Dataquestions'
import { Form, Navigate } from "react-router-dom";
import '../styless/card.css'
import { withRouter, useNavigate } from "react-router-dom";

const Inicio=()=>
{
    
    const [user, setUser]=useState("")
    const currentDate = new Date().toLocaleString();

    const navigate = useNavigate();
    const handleSubmit = (event) => { 
        
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Redirect to the Quizz component
        navigate("/Quizz/"+selectedOption);
    };

    const handleChange=(e)=>{
      
      setUser(e.target.value)
      console.log(user)
    };

    const toLeaderboard = (event) => {
      event.preventDefault();
      navigate("/Leaderboard")
    }

    const options = [{label:'1',value:1},{label:'2',value:2},{label:'3',value:3},{label:'4',value:4},{label:'5',value:5},{label:'6',value:6},{label:'7',value:7},{label:'8',value:8},{label:'9',value:9},{label:'10',value:10}]
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    return(
  <>
  <div className="card">
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuario: </label> 
        <input value={user} type="text" placeholder="Username" className="input" onChange={handleChange}></input>
      </div>
      <div>
        <label>Select # of questions</label> 
        <select
        value={selectedOption}
        onChange={e => setSelectedOption(e.target.value)}>
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
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