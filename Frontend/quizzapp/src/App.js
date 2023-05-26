import logo from './logo.svg';
import './App.css';
import Preguntas from './pages/preguntas';
import Inicio from './components/Inicio.js';
import { Routes , Route} from 'react-router-dom';
import UserContext from './components/usercontext';
import React, { useState } from 'react';
import Leaderboard from './pages/Leaderboard';


function App() {

  const [user, setUser] = useState("");
  return (
    <div className="App">

    
    <UserContext.Provider value={user}>
        <Routes>
          <Route path="/" element={<Inicio setUser={setUser} />} />
          <Route path="/Quizz" element={<Preguntas />} />
        </Routes>
      </UserContext.Provider>

     
      
    </div>
  );
}

export default App;
