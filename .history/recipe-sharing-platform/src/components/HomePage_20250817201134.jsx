import { useState } from "react";

function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Recipe added:", { title, ingredients });
        setTitle("");
        setIngredients("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block mb-1 font-medium">Recipe Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Enter recipe title"
                    required
                />
            </div>

            <div>
                <label className="block mb-1 font-medium">Ingredients</label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="List your ingredients"
                    required
                />
            </div>

            <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
                Save Recipe
            </button>
        </form>
    );
}

export default AddRecipeForm;
