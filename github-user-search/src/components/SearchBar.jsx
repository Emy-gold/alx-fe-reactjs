function SearchBar({ onSearch }) {
    return (
        <input
            type="text"
            placeholder="Search GitHub user..."
            onChange={(e) => onSearch(e.target.value)}
            className="border px-4 py-2 rounded"
        />
    );
}

export default SearchBar;
