import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Credit from './credit';
import Impact from './impact'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Impact />} />
          <Route path="/credits" element={<Credit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
