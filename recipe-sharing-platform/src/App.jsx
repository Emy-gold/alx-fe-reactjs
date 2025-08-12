import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx"

export const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App;