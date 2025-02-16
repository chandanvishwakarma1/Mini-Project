import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Role:', role);
    navigate('/login');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Create Account</h2>
        <p className="signup-subtitle">Enter your details to get started</p>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>I am a:</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="professor">Professor</option>
              <option value="hr">HR Professional</option>
            </select>
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
