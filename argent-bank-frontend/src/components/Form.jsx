import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../features/user/userSlice';
import { useNavigate } from "react-router-dom";

function Form() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    dispatch(loginStart());
    try {
      // Simule une connexion réussie ou échouée
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method:'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept':'application/json',
        },
        body: JSON.stringify({email: username, password: password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
    const data = await response.json();
      dispatch(loginSuccess({ username }));
      localStorage.setItem('token', data.token);  // Save the token in local storage
      navigate('/profile');  // Navigate to profile page after successful login
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input 
              type="text" 
              id="username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>


    
    
  );
}
export default Form;