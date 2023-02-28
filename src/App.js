import * as React from 'react';
import {Routes, Route, NavLink} from "react-router-dom";
import Tictactoe from './src1/Tictactoe';
import QuizApp from './src1/QuizGame';
import Home from './src1/Home';
import {useState} from 'react';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import LangContext from './LangContext.js';
import es from './lang/es.json';
import en from './lang/en.json';


export default function App() {

  const [lang, setLang] = useState(es);

  const handleLanguageChange = () => {
   
    setLang(() => {
      return lang === en ? es : en;
    });

  }


  return (

    <LangContext.Provider value={{lang,handleLanguageChange}}>

    <div className="black-grad buttonmenu">
        <h1 className="pad center black-grad">{lang.titulo}</h1>
      <nav className="buttonmenu black1">

      <NavLink to="/" className="buttonmenu">{lang.home}</NavLink>
      <NavLink to="/tictactoe" className="buttonmenu">{lang.tictactoe}</NavLink>
      <NavLink to="/quizapp" className="buttonmenu">{lang.quiz}</NavLink>

      
      <DropdownButton variant="secondary" id="dropdown-basic-button" title="Idioma">
        <Dropdown.Item onClick={() => setLang(es)}>Español</Dropdown.Item>
        <Dropdown.Item onClick={() => setLang(en)}>English</Dropdown.Item>
      </DropdownButton>
      </nav>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tictactoe" element={<Tictactoe />} />
      <Route path="quizapp" element={<QuizApp/>} />
    </Routes>
    </div>
    </LangContext.Provider>

  );
}