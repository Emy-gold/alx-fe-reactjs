import { useRecipeStore } from './recipeStore';

const RecipeItem = ({ recipe }) => {
    const favorites = useRecipeStore(state => state.favorites);
    const addFavorite = useRecipeStore(state => state.addFavorite);
    const removeFavorite = useRecipeStore(state => state.removeFavorite);

    const isFavorite = favorites.includes(recipe.id);

    const toggleFavorite = () => {
        isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id);
    };

    return (
        <div>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <button onClick={toggleFavorite}>
                {isFavorite ? '❤️ Remove Favorite' : '🤍 Add to Favorites'}
            </button>
        </div>
    );
};

export default RecipeItem;
