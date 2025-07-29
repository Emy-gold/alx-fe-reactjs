<<<<<<< HEAD
import { create } from 'zustand';

export const useRecipeStore = create(set => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    setRecipes: (recipes) => set({ recipes }),

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
=======
import { create } from 'zustand';

export const useRecipeStore = create(set => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    setRecipes: (recipes) => set({ recipes }),

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
>>>>>>> bd83420 (Initial clean commit without env file)
