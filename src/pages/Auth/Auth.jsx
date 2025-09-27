import React, { useState } from 'react';
import './Auth.css';
import { registerUser, loginUser } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const toggleForm = () => {
    setForm({ username: '', email: '', password: '' });
    setIsLogin(!isLogin);
    setMessage('');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = isLogin
        ? await loginUser({ email: form.email, password: form.password })
        : await registerUser(form);

      setMessage(`✅ ${isLogin ? 'Login' : 'Registration'} successful!`);

      // simulate login success redirect
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      console.error(err);
      setMessage(`❌ ${err.message || 'Something went wrong'}`);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>

        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>

        <p className="toggle-link" onClick={toggleForm}>
          {isLogin ? 'New user? Register here' : 'Already a user? Login'}
        </p>

        {message && <p className="auth-message">{message}</p>}
      </form>
    </div>
  );
};

export default Auth;
