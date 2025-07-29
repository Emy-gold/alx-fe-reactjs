import { useState } from 'react';
import { fetchGithubUser, searchGithubUsers } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [user, setUser] = useState(null);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleBasicSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setUser(null);
        setResults([]);

        try {
            const data = await fetchGithubUser(username);
            setUser(data);
        } catch (err) {
            console.error(err);
            setError("Looks like we can't find that user");
        } finally {
            setLoading(false);
        }
    };

    const handleAdvancedSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResults([]);
        setUser(null);

        if (!location || !minRepos) {
            setError('Please provide both location and minimum repositories');
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
            setError("Something went wrong while fetching users");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            {/* Basic Search Form */}
            <form onSubmit={handleBasicSearch}>
                <input
                    type="text"
                    placeholder="Search by username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Basic Search</button>
            </form>

            {/* Advanced Search Form */}
            <form onSubmit={handleAdvancedSearch}>
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Min repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />
                <button type="submit">Advanced Search</button>
            </form>

            {/* Display Area */}
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}

            {user && (
                <div className="user-result">
                    <img src={user.avatar_url} alt={user.login} />
                    <h2>{user.name || user.login}</h2>
                    <p>{user.location}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        View GitHub Profile
                    </a>
                </div>
            )}

            {results.length > 0 && (
                <div className="results-list">
                    {results.map((user) => (
                        <div key={user.id} className="user-card">
                            <img src={user.avatar_url} alt={user.login} />
                            <h3>
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                    {user.login}
                                </a>
                            </h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;