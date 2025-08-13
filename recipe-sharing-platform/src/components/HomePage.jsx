import React from 'react';
import { useState, useEffect } from 'react';
import recipesData from "../data.json";
import { Link } from "react-router-dom";


function HomePage() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData)
    }, []);

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-12 text-center">🍽 Recipe Sharing Platform</h1>
            <div className="grid justify-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {recipes.map(recipe => (
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition" key={recipe.id}>
                        <img
                            alt={recipe.title}
                            src={recipe.image}
                            className="w-full h-56 object-cover">
                        </img>
                        <div className="p-4">
                            <h2 className='text-xl front-semibold mb-2'>{recipe.title}</h2>
                            <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
                        </div>
                        <Link to={`/recipe/${recipe.id}`} key={recipe.id} className='inline-block px-4 py-2 bg-yellow-500 text-white rounded m-4 hover:bg-yellow-600'>
                            View Recipe
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default HomePage;