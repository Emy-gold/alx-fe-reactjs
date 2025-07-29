import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<div>Welcome to GitHub User Search</div>} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



