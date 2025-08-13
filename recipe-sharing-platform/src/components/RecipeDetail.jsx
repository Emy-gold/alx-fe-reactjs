import React from 'react';
import data from "../data.json";
import { useParams, Link } from "react-router-dom"

const recipeDetails = {
    1: {
        ingredients: [
            "200g spaghetti",
            "100g pancetta or bacon",
            "2 eggs",
            "50g parmesan cheese",
            "Salt and black pepper"
        ],
        instructions: [
            "Cook spaghetti in salted boiling water until al dente.",
            "Fry pancetta until crispy.",
            "Whisk eggs with cheese, salt and pepper.",
            "Mix pasta with pancetta and egg mixture.",
            "Serve immediately."
        ]
    },
    2: {
        ingredients: [
            "500g chicken breast",
            "150g yogurt",
            "1 tbsp lemon juice",
            "2 tbsp tikka masala paste",
            "200ml tomato puree",
            "100ml cream"
        ],
        instructions: [
            "Marinate chicken with yogurt, lemon juice, and tikka paste for 1 hour.",
            "Cook chicken until done.",
            "Simmer tomato puree with cream.",
            "Add chicken to sauce and simmer.",
            "Serve with rice or naan."
        ]
    }
}
export default function RecipeDetail() {
    const { id } = useParams();
    const recipe = data.find(item => item.id === parseInt(id));
    const details = recipeDetails[id];

    if (!recipe) {
        return (
            <div>
                <p>Recipe not found</p>
                <Link to="/"> Back to Home</Link>
            </div>
        )
    }
    return (

        <div className="max-w-4xl mx-auto p-6" key={recipe.id}>
            <Link to="/" className="" />
            <div className="bg-white rounded shadow p-6 mt-4">
                <img
                    alt={recipe.title}
                    src={recipe.image}
                    className="w-full h-72 object-cover">
                </img>
                <h1 className='text-3xl font-bold my-2'>{recipe.title}</h1>
                <p className="text-gray-700 mb-6">{recipe.summary}</p>

                <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
                <ul className='list-disc list-inside mb-2'>{details.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                ))}</ul>

                <h2 className='text-2xl font-semibold mb-2'>Instructions</h2>
                <ol className='list-decimal list-inside'>{details.instructions.map((step, i) => (
                    <li key={i}>{step}</li>
                ))}</ol>
            </div>

        </div>
    )
}
