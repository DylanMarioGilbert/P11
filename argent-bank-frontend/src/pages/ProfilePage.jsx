import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Main.css';
import Footer from '../components/layout/Footer';
import argentBankLogo from '../img/argentBankLogo.png';
import Profile from '../components/Profile';
import { useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";


function ProfilePage () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token'); // Supprime le token du localStorage
        navigate('/'); // Redirige vers la page de connexion
    };
  return (
    <div>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/profile">
            <i className="fa fa-user-circle"></i>
            Tony
            </Link>
          <a href='/' onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
            </a>
        </div>
      </nav>
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;