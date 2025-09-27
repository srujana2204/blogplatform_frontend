/*import React from 'react';
import './Explore.css';

const dummyPosts = [
  { id: 1, title: 'Exploring React', author: 'Alice' },
  { id: 2, title: 'CSS Tricks You Must Know', author: 'Bob' },
  { id: 3, title: 'How to Deploy with Vite', author: 'Charlie' },
];

function Explore() {
  return (
    <div className="explore-container">
      <h2>Explore Posts</h2>
      <div className="posts-list">
        {dummyPosts.map(post => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>by {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;*/
import React, { useState, useEffect } from 'react';

function ExplorePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);      // Add loading state
  const [error, setError] = useState(null);          // Add error state

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')  // Adjust the endpoint if needed
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
       
      .then(data => {
      setPosts(data.slice(0, 5)); // ✅ Limit to first 5 posts here
      setLoading(false);
    })
      .catch(err => {
        console.error("Fetch error:", err);
        setError("Failed to fetch posts");
        setLoading(false);
      });
      
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="explore-posts">
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map(post => (
          <div key={post._id || post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.summary || post.content?.slice(0, 100) + '...'}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ExplorePosts;
