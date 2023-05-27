import React, { useState, useEffect, useContext } from "react";
import '../styless/card.css'
import Inicio from "../components/Inicio";
import UserContext from "../components/usercontext";
import PreguntasContext from "../components/preguntasContext";
import { useNavigate } from "react-router-dom";

const Preguntas = () => {
    const [question, setQuestion] = useState("");
    const [questionsData, setQuestionsData] = useState([])
    const [answers, setAnswers] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [indexa, setIndexa] = useState(0);
    const preguntas= useContext(PreguntasContext);
    const user = useContext(UserContext);
    const currentDate = new Date().toLocaleString();

    const navigate = useNavigate();

  const sendPoints = async () => {
    try {
      const data = {
        name: user,
        date: currentDate,
        score: correctAnswersCount,
      };

      const jsonData = JSON.stringify(data);
      console.log(jsonData);

      const response = await fetch("https://api.askyquizzy.me/set_score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response:", result);
      } else {
        console.log("Error:", response.statusText);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.askyquizzy.me/questions`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "questions": preguntas
                    })
                });
                const data = await response.json();
                setQuestionsData(data);
                if (indexa < data.length) {
                    const { question, answer, wrongAnswers } = data[indexa];
                    setQuestion(question);
                    setAnswers([...wrongAnswers, answer]);
                    setCorrectAnswer(answer);
                }
            } catch (error) {
                console.log("Error fetching quiz data:", error);
            }
        };
        fetchData();
    }, [indexa]);

    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedAnswer === correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
            alert(`Correct!`);
        } else {
            alert(`Incorrect! Correct answer was: ${correctAnswer}`);
        }
        if (indexa < questionsData.length - 1) {
            setIndexa((prevCount) => prevCount + 1);
        } else {
            setIndexa(indexa + 1);
        }
    };

  useEffect(() => {
    const checkAndSendPoints = async () => {
        if (indexa >= questionsData.length && questionsData.length > 0) {
            alert(`Your final score is ${correctAnswersCount}`);
            await sendPoints();
            navigate("/Leaderboard");
        }
    };

    checkAndSendPoints();
  }, [correctAnswersCount, indexa]);

    const handleRestart = () => {
        setCorrectAnswersCount(0)
        setIndexa(0)
    }

    return (
        <>
            <h3>Correct Answers: {correctAnswersCount}</h3>
            <div className="card">
                <div>
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
                    <p>num question: {indexa + 1}</p>
                </div>
            </div>
            <button className="btn" onClick={handleSubmit}>Next</button>
            <button className="btn" onClick={handleRestart}>Restart</button>
        </>
    );
}

export default Preguntas;

