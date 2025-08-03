import React, { useState, useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { useParams, useHistory } from 'react-router-dom';

const EditRecipeForm = () => {
    const { recipeId } = useParams();
    const recipe = useRecipeStore(state =>
        state.recipes.find(recipe => recipe.id === recipeId)
    );
    const [title, setTitle] = useState(recipe?.title || '');
    const [description, setDescription] = useState(recipe?.description || '');
    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const history = useHistory();

    useEffect(() => {
        if (recipe) {
            setTitle(recipe.title);
            setDescription(recipe.description);
        }
    }, [recipe]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe({ id: recipeId, title, description });
        history.push(`/details/${recipeId}`);
    };

    if (!recipe) return <div>Recipe not found</div>;

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe Title"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Recipe Description"
            />
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditRecipeForm;

