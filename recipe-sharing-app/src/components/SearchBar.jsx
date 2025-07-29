<<<<<<< HEAD
import React from 'react';
import { useRecipeStore } from '../components/recipeStore';

const SearchBar = () => {
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full"
        />
    );
};

export default SearchBar;
=======
import React from 'react';
import { useRecipeStore } from '../components/recipeStore';

const SearchBar = () => {
    const searchTerm = useRecipeStore(state => state.searchTerm);
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full"
        />
    );
};

export default SearchBar;
>>>>>>> bd83420 (Initial clean commit without env file)
