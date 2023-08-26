/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./Gameover.css"
import Welldone from "../img/Welldone.svg"
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const GameOver = () => {
  const [quizState, dispatch ] = useContext(QuizContext);
  return(
    <div id="gameover">
      <h2>fim de jogo</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>você acertou {quizState.score} de {quizState.questions.length}{""} perguntas.</p>
      <img src={Welldone} alt="fim do quiz" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver