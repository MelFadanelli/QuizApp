import logo from './logo.svg';
import './App.css';
import Preguntas from './pages/preguntas';
import Inicio from './components/Inicio.js';
import { Routes , Route} from 'react-router-dom';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path="/Quizz" element={<Preguntas/>}></Route>
      <Route path="/Leaderboard" element={<Leaderboard/>}></Route>

      </Routes>
     
      
    </div>
  );
}

export default App;
