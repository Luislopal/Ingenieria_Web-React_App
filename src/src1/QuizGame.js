import * as React from 'react';
import {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import  { quizzes } from '../mock-data.js';
import Game from './Game.jsx';
import LangContext from '../LangContext.js'
import { useContext } from 'react';

export default function QuizApp(props) {

  const {lang} = useContext(LangContext);
  const [loading,setLoading]=useState(true);

  const [score,setScore]=useState(0);
  const [finished,setFinished]=useState(false);
  const [currentQuiz, setCurrentQuiz]=useState(0);
  const [quizzes2, setQuizzes] = useState(quizzes);
  const [input, setInput] = useState("");
  const [answered, setAnswered]=useState(() => new Set());
  const [respuestas, setRespuestas]=useState(()=> new Map());

  async function fetchData() {
    try{
    const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=5263281f7361528dbdc4");
    const myjson = await res.json();
    console.log(myjson);
    setQuizzes(myjson);}
    catch(error){
    setQuizzes(quizzes);
    }
    setTimeout(()=>{
      setLoading(false);
    },2000)

     }
    useEffect(() => {
      fetchData();  
    }, []);


  function nextQuestion(){
    if(currentQuiz<quizzes2.length-1){
    setCurrentQuiz(currentQuiz+1);
    }

  }
  
  function checkAnswer(){

    if(respuestas.has(currentQuiz)){
      respuestas.delete(currentQuiz);
    }
  
    setRespuestas(new Map(respuestas.set(currentQuiz, input)));
    setAnswered(answered => new Set(answered).add(currentQuiz));

  
    if (answered.size===10) {
      setFinished(true);
    }
  
    if(currentQuiz<quizzes2.length-1 ){
      setCurrentQuiz(currentQuiz+1);
    }
  }

  function checkFinish(){
    setFinished(true);
  }
  
  function previousQuestion(){
    if(currentQuiz>0){
      setCurrentQuiz(currentQuiz-1);
    }
  }
  
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(2);
  
  useEffect(()=>{
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } 
    }, 1000)
    return ()=> {
      clearInterval(myInterval);
    };
  });
  
  function recargar(){
    fetchData();
    setSeconds(60);
    setMinutes(0);
  }
  
  function playagain(){
    setFinished(false);
    window.location.reload(false);
  }

  if (finished === false){
    return (
      <div>

      <div className="row game">
        <Game  previousQuestion={previousQuestion} checkAnswer={checkAnswer} nextQuestion={nextQuestion} checkFinish={checkFinish} 
        quizzes={quizzes2} currentQuiz={currentQuiz} input={input}  score={score}  setInput={setInput} recargar={recargar} answered={answered}/>
      </div>
    </div>
  );
  }
  else{
    [...respuestas].map((value) =>{
    if(value[1]===quizzes2[value[0]].answer){
      setScore(score+1);
    }
    return 0;
    });
  
    return (
      <div className="finish">
        <h1>{lang.final}</h1>
        <h3>{lang.resultado} {score}</h3>

<br></br>
      <Button variant="secondary" onClick={()=>playagain()}>{lang.playagain}</Button>
    </div>
  );
}
}
