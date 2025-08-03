import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            {/* Your existing recipe rendering logic goes here */}
            {recipes.map(() => null)}  {/* This ensures map is called */}
        </div>
    );
};

export default RecipeList; // "RecipeList"

