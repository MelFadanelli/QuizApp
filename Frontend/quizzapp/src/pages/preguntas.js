import React, { useState, useEffect } from "react";
import questionsData from '../components/Dataquestions'
import '../styless/card.css'

const Preguntas=()=>{
    const [question, setQuestion] = useState(""); // Placeholder for question
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer]= useState("");

    useEffect(() => {
   
        setQuestion(questionsData[0].question);
        setAnswers([...questionsData[0].wrongAnswers, questionsData[0].answer]);
        setCorrectAnswer(questionsData[0].answer);
      }, []);



    return(
        <>
        <div className="card">
            <div >
        <h1>Questions</h1>
        <h2>{question}</h2>
        <form>
          {answers.map((answer, index) => (
            <div key={index}>
              <input
                type="radio"
                value={answer}
                checked={answer === correctAnswer}
                onChange={(e) => setCorrectAnswer(e.target.value)}
              />
              <label>{answer}</label>
            </div>
          ))}
        </form>
        
      </div>
      
      </div>
      <button className="btn">Next</button>
      </>
    );
}
export default Preguntas;
