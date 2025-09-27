const API_BASE = 'http://localhost:5000/api';

export const registerUser = (d) =>
  fetch(`${API_BASE}/users/register`, { method:'POST',
    headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) })
  .then(async r => { if(!r.ok) throw new Error((await r.json()).message); return r.json(); });

export const loginUser = (d) =>
  fetch(`${API_BASE}/users/login`, { method:'POST',
    headers:{'Content-Type':'application/json'}, body:JSON.stringify(d) })
  .then(async r => { if(!r.ok) throw new Error((await r.json()).message); return r.json(); });

// ✅ NEW: Create a post
export const createPost = async (postData) => {
  const res = await fetch(`${API_BASE}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  return await res.text(); // or res.json() based on your backend response
};

// ✅ NEW: Fetch all posts
export const fetchPosts = async () => {
  const res = await fetch(`${API_BASE}/posts`);
  return await res.json();
};
