import { useState } from 'react';
import { fetchUserData, searchGithubUsers } from '../services/githubService';


function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [user, setUser] = useState(null);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Basic Search
    const handleBasicSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUser(null);
        setResults([]);

        try {
            const data = await fetchUserData(username); // ✅ fixed function name
            setUser(data);
        } catch (err) {
            console.error(err);
            setError("Looks like we can't find that user");
        } finally {
            setLoading(false);
        }
    };

    // Advanced Search
    const handleAdvancedSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResults([]);
        setUser(null);

        if (!location || !minRepos) {
            setError('Looks like we cant find the user');
            setLoading(false);
            return;
        }

        const query = `location:${location} repos:>=${minRepos}`;

        try {
            const data = await searchGithubUsers(query);
            if (data.total_count === 0) {
                setError("No users found for this search");
            } else {
                setResults(data.items);
            }
        } catch (err) {
            console.error(err);
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
                {/* Basic Search Form */}
                <form onSubmit={handleBasicSearch} className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Search by username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="my-gradient-input"
                    />
                    <button type="submit" className="mb-5 ml-2 my-gradient-btn">Basic Search</button>
                </form>

                {/* Advanced Search Form */}
                <form onSubmit={handleAdvancedSearch} className="flex flex-col gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="my-gradient-input"
                    />
                    <input
                        type="number"
                        placeholder="Min repositories"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        className="my-gradient-input"
                    />
                    <button type="submit" className="my-gradient-btn">Advanced Search</button>
                </form>

                {/* Display Results */}
                {loading && <p className="text-center text-gray-600">Loading...</p>}
                {error && <p className="text-center text-red-600">{error}</p>}

                {
                    user && (
                        <div className="text-center mt-6">
                            <img src={user.avatar_url} alt={user.login} className="mx-auto rounded-full w-24 h-24 mb-2" />
                            <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
                            <p>{user.location}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                View GitHub Profile
                            </a>
                        </div>
                    )
                }

                {
                    results.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {results.map((user) => (
                                <div key={user.id} className="p-4 rounded-lg text-center bg-blue-50">
                                    <img src={user.avatar_url} alt={user.login} className="mx-auto rounded-full w-24 h-24 mb-2" />
                                    <h3>
                                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium">
                                            {user.login}
                                        </a>
                                    </h3>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div >
        </div>
    );
}

export default Search;
