import React from 'react';

import es from './lang/es.json';





const LangContext = React.createContext({userLang: 'es', dictionary : es});

export default LangContext;

