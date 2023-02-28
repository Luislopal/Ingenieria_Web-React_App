import * as React from 'react';
import notimage from '../descarga1.png';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Author from './Author.jsx';
import Actionbar from './Actionbar.jsx';
import LangContext from '../LangContext.js'
import {useContext} from 'react';

export default function Game(props) {
    const { lang } = useContext(LangContext);


    function reload(){
        props.recargar();
    }

    function nq(){
        props.nextQuestion();
    }
    function ca(){
        props.checkAnswer();
    }
    function pq(){
        props.previousQuestion();
    }
    function si(input){
        props.setInput(input);
    }
    function checkFinish(){
        props.checkFinish();
    }
   
    var username;
    try{
    var author = props.quizzes[props.currentQuiz].author;
        if (author.profileName){
            username = author.profileName;
        }
        else if (author.username){
             username = author.username;
        }
        else{
            username = lang.anonymus;
        }

    } catch (error){
            username = lang.anonymus;
        console.log("Autor asignado como anonimo.")
    }
  return (
    <div className="col-11">
        <div className="row topact">
            <img className="col imgquiz" alt="nohayimagen" src={props.quizzes[props.currentQuiz].attachment ? props.quizzes[props.currentQuiz].attachment.url : notimage}/>
            <div className="col">
            <Question question={props.quizzes[props.currentQuiz].question} index={props.currentQuiz}/>
            <Answer setInput={si} input={props.input} />
            </div>
            <div className="row">
            <Author 
            
            username={username}
            photourl={props.quizzes[props.currentQuiz].author ? props.quizzes[props.currentQuiz].author.photo.url ? props.quizzes[props.currentQuiz].author.photo.url : notimage : notimage}
                    
            />
            </div> 
        </div>
    <Actionbar quiz={props.quiz}  nextQuestion={nq} checkAnswer={ca} previousQuestion={pq} recargar={reload} checkFinish={checkFinish} currentQuiz={props.currentQuiz} answered={props.answered} />
    

    </div>
  );
}