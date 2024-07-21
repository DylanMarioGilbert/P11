import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { useNavigate } from "react-router-dom";

function Form() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector(state => state.user);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    try {
    await dispatch(loginUser({ email: username, password }));
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
    // Rediriger vers /profile si la connexion est réussie
    React.useEffect(() => {
      if (status === 'succeeded') {
        navigate('/profile');
      }
    }, [status, navigate]);

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
            {status === 'failed' && (
            <p className="error-message">{error}</p>
          )}
          </form>
        </section>
      </main>


  );
}
export default Form;