import React, { useState, useEffect } from "react";
import '../styless/card.css'
import Inicio from "../components/Inicio";
import { useSearchParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../components/usercontext";
import PreguntasContext from "../components/preguntasContext";

const Preguntas=()=>{
    const [question, setQuestion] = useState(""); // Placeholder for question
    const [questionsData, setQuestionsData]=useState("")
    const [answers, setAnswers] = useState([]);
    const [Answer, setAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer]= useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [indexa, setIndexa]=useState(0);
    const preguntas= useContext(PreguntasContext);
    const user= useContext(UserContext);
    const currentDate = new Date().toLocaleString();



    //Makes json to send
    const sendPoints=()=>{
      const data={
        user,
        currentDate,
        correctAnswersCount
      }
      const jsonData= JSON.stringify(data);
      console.log(jsonData)

    }

    
   

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.askyquizzy.me/questions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "questions":  preguntas// 5questions
            })
          });
          const data = await response.json();
          const { question, answer, wrongAnswers } = data[indexa];
          setQuestionsData(data);
          setQuestion(question);
          setAnswers([...wrongAnswers, answer]);
          setCorrectAnswer(answer);
        } catch (error) {
          console.log("Error fetching quiz data:", error);
        }
      };
    
      fetchData();
    }, [indexa]);

   


      const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
      };

    




     const handlesubmit=()=>{
        if (selectedAnswer === correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
            alert(`"correct! :D" `);
            

           
      }else{
        alert(`"incorrect! correct answer was: " ${correctAnswer}`);
      }
      if (indexa+1 === questionsData.length) {
        alert(`Your final score is ${correctAnswersCount}`);
        sendPoints();

      }else{
        setIndexa((prevCount)=>prevCount+1);
        console.log(correctAnswersCount, indexa)
        //Console.log(user)
        sendPoints();

      }

      
    }

    const handleSendAns=()=>{
      
    }
//restart quizz
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