import { create } from 'zustand';

export const useRecipeStore = create(set => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    // Set the recipes array
    setRecipes: (recipes) => set({ recipes }),

    // Add a recipe to favorites
    addFavorite: (recipeId) =>
        set(state => ({
            favorites: [...new Set([...state.favorites, recipeId])], // Avoid duplicates
        })),

    // Remove a recipe from favorites
    removeFavorite: (recipeId) =>
        set(state => ({
            favorites: state.favorites.filter(id => id !== recipeId),
        })),

    // Generate recommendations based on favorites
    generateRecommendations: () =>
        set(state => {
            const recommended = state.recipes.filter(
                recipe =>
                    state.favorites.includes(recipe.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),

    // Other actions like adding recipes, etc.
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
