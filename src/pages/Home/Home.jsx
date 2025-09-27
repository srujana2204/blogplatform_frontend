import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { fetchPosts } from '../../utils/api'; // adjust path

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((res) => setPosts(res))
      .catch((err) => console.error('Failed to fetch posts:', err));
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to InkSpire</h1>
        <p>Discover ideas, share your thoughts, and connect with a community of writers and readers.</p>
        <div className="home-buttons">
          <Link to="/Explore" className="home-button">Explore Posts</Link>
          <Link to="/write" className="home-button">Write a Post</Link>
          <Link to="/join" className="home-button">Join Now</Link>

        </div>
      </div>

      <div className="features">
        <div className="feature-card"><h3>📰 Trending Topics</h3><p>Explore tech, lifestyle, travel...</p></div>
        <div className="feature-card"><h3>✍️ Write Freely</h3><p>Share your tutorials or stories.</p></div>
        <div className="feature-card"><h3>👥 Connect</h3><p>Follow writers and join discussions.</p></div>
      </div>

      <div className="sample-posts">
        <h2>📚 Latest Posts</h2>

        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <div className="post-actions">
                <span>👍 Like</span>
                <span>💬 Comment</span>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found. Be the first to publish!</p>
        )}
      </div>
    </div>
  );
};

export default Home;
