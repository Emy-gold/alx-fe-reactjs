// PostsComponent.jsx
import React from "react";
import { useQuery } from "react-query";

const fetchPosts = async () => {
    const { data } = await fetch("https://jsonplaceholder.typicode.com/posts");
    return data;
};

function PostsComponent() {
    const {
        data,
        error,
        isLoading,
        isError,
        refetch,
        isFetching,
    } = useQuery("posts", fetchPosts, {
        staleTime: 5000,
        cacheTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <button
                onClick={() => refetch()}
                style={{ padding: "8px 16px", marginBottom: "10px", cursor: "pointer" }}
            >
                Refresh Posts {isFetching ? " (fetching...)" : ""}
            </button>

            <ul>
                {data.slice(0, 10).map((post) => (
                    <li key={post.id} style={{ marginBottom: "8px" }}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsComponent;
