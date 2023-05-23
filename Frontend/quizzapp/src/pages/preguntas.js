import React, { useState, useEffect } from "react";

const Preguntas=()=>{
    const [question, setQuestion] = useState("Example"); // Placeholder for question
    const [answers, setAnswers] = useState(["Answer1", "Answer2", "Answer3"]);
    const [correctans, setCorrectans]= useState("correct");
    return(
    <div>
    <h1>Preguntas</h1>
    <h2>Pregunta</h2>
        <p>{question}</p>
        <form>
            <input type="radio" value ={correctans}></input>
            <label>{correctans} </label>
        </form>

    </div>
    );
}
export default Preguntas;
