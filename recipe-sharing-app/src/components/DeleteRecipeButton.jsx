import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate(); // ✅ useNavigate hook

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate('/'); // Navigate back to the homepage (or another route)
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;

