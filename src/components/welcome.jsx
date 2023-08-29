import {useContext} from "react";
import { QuizContext } from "../context/quiz";
import "./welcome.css"
import Quiz from "../img/quiz.svg"


const Welcome = () => {

  // eslint-disable-next-line no-unused-vars
  const [quizState, dispatch] = useContext(QuizContext);
  
  return(
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botao abaixo para começar</p>
      <button onClick={() => dispatch({type: "CHANGE_STATE"})}>iniciar</button>
      <img src={Quiz} alt="imagem basica de enfeite" />
    </div>
  )
}
export default Welcome;