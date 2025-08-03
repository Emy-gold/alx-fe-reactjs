import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';  // ✅ Import Link from react-router-dom
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
                    <div key={recipe.id}>
                        <Link to={`/details/${recipe.id}`}> {/* Link to the details page of the recipe */}
                            <h3>{recipe.title}</h3>
                        </Link>
                        <p>{recipe.description}</p>
                    </div>
                ))
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;

