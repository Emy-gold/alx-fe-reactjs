import { create } from 'zustand'; // ✅ "zustand" and "create"

export const useRecipeStore = create(set => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    setRecipes: (recipes) => set({ recipes }), // ✅ "setRecipes"

    addRecipe: (newRecipe) => // ✅ "addRecipe"
        set(state => ({
            recipes: [...state.recipes, newRecipe],
        })),

    addFavorite: (recipeId) =>
        set(state => ({
            favorites: [...new Set([...state.favorites, recipeId])],
        })),

    removeFavorite: (recipeId) =>
        set(state => ({
            favorites: state.favorites.filter(id => id !== recipeId),
        })),

    generateRecommendations: () =>
        set(state => {
            const recommended = state.recipes.filter(
                recipe =>
                    state.favorites.includes(recipe.id) && Math.random() > 0.5
            );
            return { recommendations: recommended };
        }),
}));
