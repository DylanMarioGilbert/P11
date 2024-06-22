import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Footer from '../components/layout/Footer';
import argentBankLogo from '../img/argentBankLogo.png';
import Profile from '../components/Profile';


function ProfilePage () {
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
          <Link className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        </div>
      </nav>
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;