import React, { useState } from 'react';
import './Write.css';
import { createPost } from '../../utils/api'; // adjust path as needed
import { useNavigate } from 'react-router-dom'; // ⬅️ import navigate hook

function Write() {
  const [post, setPost] = useState({ title: '', content: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // ⬅️ initialize navigation

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!post.title || !post.content) {
      alert("⚠️ Please fill in both title and content.");
      return;
    }

    try {
      await createPost(post);
      setMessage("✅ Post published successfully!");
      setPost({ title: '', content: '' });

      // ⬇️ Redirect to home after 1 second
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      console.error('❌ Failed to create post:', error.message);
      setMessage("❌ Failed to publish post.");
    }
  };

  return (
    <div className="write-container">
      <form className="write-form" onSubmit={handleSubmit}>
        <h2>Create a Post</h2>
        <input
          name="title"
          placeholder="Post Title"
          value={post.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Write something..."
          value={post.content}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Publish</button>
      </form>
      {message && <p style={{ marginTop: '1rem', color: '#444' }}>{message}</p>}
    </div>
  );
}

export default Write;
