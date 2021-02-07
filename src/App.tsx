import React, { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import AppContainer from './screens/AppContainer';
function App() {
  return <BrowserRouter>
    <AppContainer />
  </BrowserRouter>
}

export default App;