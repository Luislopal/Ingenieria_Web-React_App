import React from 'react';
import {Card} from 'react-bootstrap';
import LangContext from '../LangContext.js'
import {useContext} from 'react';


const divStyle = {
  width: '18rem',
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto" 
}

export default function Header(props) {
  const { lang } = useContext(LangContext);

    return (
      <Card style={divStyle}>
        <Card.Body>
          <Card.Title>{lang.turn}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    );
}