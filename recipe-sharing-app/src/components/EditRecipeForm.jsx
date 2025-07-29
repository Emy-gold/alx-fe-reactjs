<<<<<<< HEAD
import { useState } from "react";
import { useRecipeStore } from "./recipeStore"; // Adjust path if needed

const EditRecipeForm = ({ recipe, onFinish }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const handleSubmit = (event) => {
        event.preventDefault(); // ✅ Required
        updateRecipe(recipe.id, { title, description });
        onFinish(); // Call a callback to close form or redirect
    };

    return (
        <form onSubmit={handleSubmit}> {/* ✅ Required */}
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;
=======
import { useState } from "react";
import { useRecipeStore } from "./recipeStore"; // Adjust path if needed

const EditRecipeForm = ({ recipe, onFinish }) => {
    const [title, setTitle] = useState(recipe.title);
    const [description, setDescription] = useState(recipe.description);
    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const handleSubmit = (event) => {
        event.preventDefault(); // ✅ Required
        updateRecipe(recipe.id, { title, description });
        onFinish(); // Call a callback to close form or redirect
    };

    return (
        <form onSubmit={handleSubmit}> {/* ✅ Required */}
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Update Recipe</button>
        </form>
    );
};

export default EditRecipeForm;
>>>>>>> bd83420 (Initial clean commit without env file)
