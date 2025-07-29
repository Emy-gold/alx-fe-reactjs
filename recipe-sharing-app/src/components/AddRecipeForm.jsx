<<<<<<< HEAD
// AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { v4 as uuidv4 } from 'uuid';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const addRecipe = useRecipeStore((state) => state.addRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe({ id: uuidv4(), title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

=======
// AddRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';
import { v4 as uuidv4 } from 'uuid';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const addRecipe = useRecipeStore((state) => state.addRecipe);

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe({ id: uuidv4(), title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <button type="submit">Add Recipe</button>
        </form>
    );
};

>>>>>>> bd83420 (Initial clean commit without env file)
export default AddRecipeForm;