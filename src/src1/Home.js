import * as React from 'react';
import LangContext from '../LangContext.js'
import { useContext } from 'react';
import bienvenida from './descarga.jpeg';



export default function Home() {
  const { lang } = useContext(LangContext);

  return (
    
    <main className ="text-white pad">
      <h2 className = "center">{lang.h1}</h2>
      <p className="center">{lang.p1}</p>
      <p className="center">{lang.p2}</p>        
      <div className="imgtexthome" className="center">
          <img src={bienvenida} alt="bienvenida" weight="250" height="250"/> 
      </div>
    </main>
  );
}