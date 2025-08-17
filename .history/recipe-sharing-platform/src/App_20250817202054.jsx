import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import RecipeDetail from './components/RecipeDetail.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';

export const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipe-adding" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  )
}

export default App;