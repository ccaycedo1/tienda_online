import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import catalogo from './components/catalogo';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/cat" component={catalogo} />   
      </Routes>
    </Router>
   
  );
};

//export default Routes;
