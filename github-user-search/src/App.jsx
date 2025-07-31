import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center text-center justify-center p-4">
        <h1 className="text-6xl font-bold p-4 animate-pulse">GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<div className="text-xl">Welcome to GitHub User Search</div>} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



