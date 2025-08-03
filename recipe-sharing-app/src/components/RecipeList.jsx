import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
    const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    useEffect(() => {
        filterRecipes();  // Re-filter recipes on mount
    }, [filterRecipes]);

    return (
        <div>
            <h2>Recipe List</h2>
            {filteredRecipes.length > 0 ? (
                filteredRecipes.map(recipe => (
                    <RecipeItem key={recipe.id} recipe={recipe} />
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;

