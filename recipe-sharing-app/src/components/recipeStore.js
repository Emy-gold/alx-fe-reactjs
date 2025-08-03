import { create } from 'zustand';

export const useRecipeStore = create(set => ({
    recipes: [], // List of all recipes
    favorites: [], // List of favorite recipe IDs
    recommendations: [], // List of recommended recipes

    // State and actions for search functionality
    searchTerm: '', // The search term entered by the user
    filteredRecipes: [], // List of recipes matching the search term

    // Set recipes
    setRecipes: (recipes) => set({ recipes }),

    // Action to update the search term
    setSearchTerm: (term) => set({ searchTerm: term }),

    // Action to filter recipes based on search term
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(state.searchTerm.toLowerCase()))
        )
    })),

    // Other actions like adding/removing favorites, generating recommendations, etc.
    addFavorite: (recipeId) =>
        set(state => ({
            favorites: [...new Set([...state.favorites, recipeId])], // Avoid duplicates
        })),

    removeFavorite: (recipeId) =>
        set(state => ({
            favorites: state.favorites.filter(id => id !== recipeId),
        })),

    generateRecommendations: () =>
        set(state => {
            const recommended = state.recipes.filter(
                recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),

    addRecipe: (newRecipe) =>
        set(state => ({
            recipes: [...state.recipes, newRecipe],
        })),
    deleteRecipe: (recipeId) =>
        set(state => ({
            recipes: state.recipes.filter(recipe => recipe.id !== recipeId),
        })),
    updateRecipe: (updatedRecipe) =>
        set(state => ({
            recipes: state.recipes.map(recipe =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
        })),
}));
