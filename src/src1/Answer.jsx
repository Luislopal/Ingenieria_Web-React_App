import React from 'react';
import LangContext from '../LangContext.js'
import { useContext } from 'react';
import {Button} from 'react-bootstrap';




export default function Answer(props) {
  const { lang } = useContext(LangContext);
  
  return(
    <div className="ans input-group mb-3">
    
    <label>{lang.answer} </label>
    <input  class="form-control"  placeholder={lang.input}   value={props.input} onInput={e => props.setInput(e.target.value)}   id="myInput"/>
    <Button variant="secondary " class="btn btn-outline-secondary" onClick={()=>props.setInput("")}>
      {lang.limpiar}
    </Button>
 
    </div>
  
        
    
  );
}