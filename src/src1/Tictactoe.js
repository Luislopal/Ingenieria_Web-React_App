import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Reset from './Reset.jsx';
import LangContext from '../LangContext.js'
import {useContext} from 'react';


export default function Tictactoe(props) {
  const { lang } = useContext(LangContext);
    const PLAYERX = lang.PLAYERX;
    const PLAYER0 = lang.PLAYER0;
  const [turn, setTurn] = useState(PLAYERX);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState([
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
    ]);

  useEffect(() => {
      document.title = `${lang.text} ${turn}`;
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://myjson.dit.upm.es/api/bins/ccr5");
      const myjson = await res.json();
      console.log(myjson);
    }

    fetchData();
  }, []);

  function appClick(rowNumber, columnNumber) {
      let valuesCopy = JSON.parse(JSON.stringify(values));
      let newMovement = turn === PLAYERX ? 'X' : '0';
      valuesCopy[rowNumber][columnNumber] = newMovement;
      setTurn(turn === PLAYERX ? PLAYER0 : PLAYERX);
      setValues(valuesCopy);
      setMoves(moves + 1); 
  }

  function reset(){
    setTurn(PLAYERX);
    setMoves(0);
    setValues([
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ]);
  }

  
  let text = lang.text + turn;


  return (
    <div className= "center">
      <div className="blackfont">
      <Header text={text}/>
      </div>
      <br/>
      <Board values={values}  appClick={appClick}/>
      <h3>{lang.numberofmoves} {moves}</h3>
      <Reset reset={reset}></Reset>
    </div>
  );


}