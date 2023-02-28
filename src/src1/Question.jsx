import React from 'react';
import LangContext from '../LangContext.js'
import { useContext } from 'react';

export default function Question(props) {
  const { lang } = useContext(LangContext);

  return(
    <div className="question">
      <div>{lang.Question} {props.index + 1} </div>
      {props.question}
    </div>
  );
    
}