import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);  // Update search term in the store
        filterRecipes();  // Trigger the filtering process
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search recipes..."
                onChange={handleSearchChange}
            />
        </div>
    );
};

export default SearchBar;


