<<<<<<< HEAD
// RecipeDetails.jsx
import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === id)
    );

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton id={recipe.id} />
        </div>
    );
};

=======
// RecipeDetails.jsx
import { useRecipeStore } from './recipeStore';
import { useParams } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
    const { id } = useParams();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === id)
    );

    if (!recipe) return <p>Recipe not found</p>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton id={recipe.id} />
        </div>
    );
};

>>>>>>> bd83420 (Initial clean commit without env file)
export default RecipeDetails;