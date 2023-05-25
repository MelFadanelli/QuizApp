import React, { useState, useEffect } from "react";
import questionsData from '../components/Dataquestions'
import '../styless/card.css'
import Inicio from "../components/Inicio";

const Preguntas=()=>{
    const [question, setQuestion] = useState(""); // Placeholder for question
    const [answers, setAnswers] = useState([]);
    const [Answer, setAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer]= useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
   const [indexa, setIndexa]=useState(0);

    useEffect(() => {  
        setQuestion(questionsData[indexa].question);
        setAnswers([...questionsData[indexa].wrongAnswers, questionsData[indexa].answer]);
        setCorrectAnswer(questionsData[indexa].answer);
        //setIndexa(questionsData[0].id);
      }, [indexa]);

      const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
      };

      const handIndexa=()=>{
        console.log("AQUIIII ESTAA", indexa)
      }




     const handlesubmit=()=>{
        if (selectedAnswer === correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
            alert(`"correct! :D" `);

           
      }else{
        alert(`"incorrect! correct answer was: " ${correctAnswer}`);
      }
      if (indexa+1 === questionsData.length) {
        alert(`Your final score is ${correctAnswersCount}`);

      }else{
        setIndexa((prevCount)=>prevCount+1);
        console.log(correctAnswersCount, indexa)
      }

      
    }

    const handleSendAns=()=>{

    }

    const handleResart=()=>{
      setCorrectAnswersCount(0)
      setIndexa(0)
    }






    return(
        <>
        <h3>Correct Answers: {correctAnswersCount}</h3>
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
                checked={answer === selectedAnswer}
                onChange={handleAnswerChange}
                
              />
              <label>{answer}</label>
            </div>
          ))}
       
        </form>
        <p>num question: {indexa+1}</p>
        
      </div>
      
      </div>
      <button className="btn" onClick={handlesubmit}>Next</button>
      <button className="btn" onClick={handleResart}>Restart </button>
      </>
    );
}

export default Preguntas;
