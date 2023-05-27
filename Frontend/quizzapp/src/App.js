import logo from './logo.svg';
import './App.css';
import Preguntas from './pages/preguntas';
import Inicio from './components/Inicio.js';
import { Routes , Route} from 'react-router-dom';
import UserContext from './components/usercontext';
import React, { useState } from 'react';
import Leaderboard from './pages/Leaderboard';
import PreguntasContext from './components/preguntasContext';


function App() {

  const [user, setUser] = useState("");
  const [preguntas , setPreguntas]=useState(0)
  return (
    <div className="App">

    
    <UserContext.Provider value={user}>
      <PreguntasContext.Provider value={preguntas}>

        <Routes>
          <Route path="/" element={<Inicio setUser={setUser} setPreguntas={setPreguntas} />} />
          <Route path="/Quizz" element={<Preguntas />} />
          <Route path="/Leaderboard" element={<Leaderboard/>}></Route>

        </Routes>
        </PreguntasContext.Provider>
      </UserContext.Provider>

     
      
    </div>
  );
}

export default App;