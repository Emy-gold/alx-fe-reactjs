<<<<<<< HEAD
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
    const recommendations = useRecipeStore(state => state.recommendations);

    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    return (
        <div>
            <h2>Recommended for You</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations yet.</p>
            ) : (
                recommendations.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecommendationsList;
=======
import { useRecipeStore } from './recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
    const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
    const recommendations = useRecipeStore(state => state.recommendations);

    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    return (
        <div>
            <h2>Recommended for You</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations yet.</p>
            ) : (
                recommendations.map(recipe => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecommendationsList;
>>>>>>> bd83420 (Initial clean commit without env file)
