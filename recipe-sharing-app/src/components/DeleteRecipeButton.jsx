<<<<<<< HEAD
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom"; // ✅ Import nécessaire

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate(); // ✅ Hook de redirection

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate("/"); // ✅ Redirection vers la page d’accueil après suppression
    };

    return (
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
        </button>
    );
};

export default DeleteRecipeButton;
=======
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom"; // ✅ Import nécessaire

const DeleteRecipeButton = ({ recipeId }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate(); // ✅ Hook de redirection

    const handleDelete = () => {
        deleteRecipe(recipeId);
        navigate("/"); // ✅ Redirection vers la page d’accueil après suppression
    };

    return (
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">
            Delete
        </button>
    );
};

export default DeleteRecipeButton;
>>>>>>> bd83420 (Initial clean commit without env file)
