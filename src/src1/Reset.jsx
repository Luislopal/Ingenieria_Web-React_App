import React from 'react';
import {Button} from 'react-bootstrap';
import LangContext from '../LangContext.js'
import {useContext} from 'react';

export default function Reset(props) {
  function click() {
    props.reset();
  }
  const {lang} = useContext(LangContext);

  return(
    <Button onClick={click} variant="secondary" >
      {lang.reset}
    </Button>
  );
    
}