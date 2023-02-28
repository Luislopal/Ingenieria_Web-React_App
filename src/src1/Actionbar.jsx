import React from 'react';
import {Button} from 'react-bootstrap';
import LangContext from '../LangContext.js'
import { useContext } from 'react';



export default function Actionbar(props) {
  const { lang } = useContext(LangContext);

  function reload(){
    props.recargar();
  }
  function check(){
     
      props.checkAnswer();
      props.nextQuestion();

  }
  function next(){
    props.nextQuestion();
  }
  function previous(){
    props.previousQuestion();

  }
  function finish(){
    props.checkFinish();
  }
 
  var buttonPrevious_disabled;
  var buttonNext_disabled;
    if(props.currentQuiz===0){
        buttonPrevious_disabled=true;
    }
    else{
       buttonPrevious_disabled=false;
    }
    if(props.currentQuiz===9){
       buttonNext_disabled=true;
    }
    else{
       buttonNext_disabled=false;
    }
  return(
    <div className="actionbar">
    <Button variant="secondary" onClick={previous} disabled={buttonPrevious_disabled}>
    {lang.previous}
    </Button> 
    <Button variant="secondary" onClick={next} disabled={buttonNext_disabled}>
        {lang.next}
    </Button>  
    <Button variant="secondary" onClick={check} >
        {lang.submit}
    </Button> 
    <Button variant="secondary" onClick={reload}>
        {lang.reset}
    </Button>
    <Button variant="secondary" onClick={finish}  >
    {lang.finish}
    </Button>
    </div>
  );
}