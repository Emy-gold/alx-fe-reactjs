import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <h1>GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<div>Welcome to GitHub User Search</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

