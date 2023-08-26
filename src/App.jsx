import './App.css';
import Welcome from './components/welcome';
import { useContext, useEffect } from "react";
import Question from './components/Question';
import { QuizContext } from './context/quiz';
import Gameover from './components/Gameover';


function App() {
  const [quizState, dispatch ] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REODER_QUESTIONS"})
  }, [])


  return (
    <div className='App'>
    <h1>Quiz de Programação</h1>
    {quizState.gameStage === "Start" && <Welcome/>}
    {quizState.gameStage === "Playing" && <Question/>}
    {quizState.gameStage === "End" && <Gameover />}
    
    </div>
  )
}

export default App
