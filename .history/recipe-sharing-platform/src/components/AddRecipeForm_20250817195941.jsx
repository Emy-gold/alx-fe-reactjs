import React, { useState } from "react";

export default function AddRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [steps, setSteps] = useState("");
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};

        // title
        if (!title.trim()) errs.title = "Recipe title is required.";

        // ingredients: split by comma OR new line, trim, remove empty
        const ingItems = ingredients
            .split(/\n|,/)
            .map((s) => s.trim())
            .filter(Boolean);
        if (ingItems.length < 2)
            errs.ingredients = "Please enter at least 2 ingredients (comma or new line).";

        // steps: one step per line
        const stepItems = steps
            .split(/\n+/)
            .map((s) => s.trim())
            .filter(Boolean);
        if (stepItems.length === 0) errs.steps = "Preparation steps are required.";

        setErrors(errs);
        return { ok: Object.keys(errs).length === 0, ingItems, stepItems };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(false);

        const { ok, ingItems, stepItems } = validate();
        if (!ok) return;

        // payload (ALX ma talabch persist; hna console.log)
        const payload = {
            title: title.trim(),
            ingredients: ingItems,
            steps: stepItems,
        };
        console.log("New recipe submitted:", payload);

        setSubmitted(true);
        setTitle("");
        setIngredients("");
        setSteps("");
        setErrors({});
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
            noValidate
        >
            <h1 className="text-2xl font-semibold text-center">Add a New Recipe</h1>

            {submitted && (
                <div className="rounded-lg bg-green-50 text-green-700 p-3 text-sm">
                    Recipe submitted successfully.
                </div>
            )}

            {/* Title */}
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Recipe Title
                </label>
                <input
                    id="title"
                    type="text"
                    className={`mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.title ? "border-red-500" : "border-gray-300"}`}
                    placeholder="e.g., Spaghetti Carbonara"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    aria-invalid={!!errors.title}
                />
                {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
            </div>

            {/* Ingredients */}
            <div>
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
                    Ingredients <span className="text-gray-400">(comma or new line)</span>
                </label>
                <textarea
                    id="ingredients"
                    rows={3}
                    className={`mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.ingredients ? "border-red-500" : "border-gray-300"}`}
                    placeholder={`e.g.\nspaghetti, eggs, parmesan\nor\nspaghetti\neggs\nparmesan`}
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    aria-invalid={!!errors.ingredients}
                />
                {errors.ingredients && <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>}
            </div>

            {/* Steps */}
            <div>
                <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
                    Preparation Steps
                </label>
                <textarea
                    id="steps"
                    rows={4}
                    className={`mt-1 w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.steps ? "border-red-500" : "border-gray-300"}`}
                    placeholder={`e.g.\nBoil pasta\nMix eggs with cheese\nToss with pancetta`}
                    value={steps}
                    onChange={(e) => setSteps(e.target.value)}
                    aria-invalid={!!errors.steps}
                />
                {errors.steps && <p className="mt-1 text-sm text-red-600">{errors.steps}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition"
            >
                Submit
            </button>
        </form>
    );
}
