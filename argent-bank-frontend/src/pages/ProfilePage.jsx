import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Main.css';
import Footer from '../components/layout/Footer';
import argentBankLogo from '../img/argentBankLogo.png';
import Profile from '../components/Profile';
import { useSelector, useDispatch } from "react-redux";
import { logout, getUserProfile } from "../features/user/userSlice";



function ProfilePage () {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status, error, profile } = useSelector(state => state.user);

    useEffect(() => {
      dispatch(getUserProfile());
    }, [dispatch]);
  
    useEffect(() => {
      console.log(status, error)
      if (status === 'failed' && error === 'No token found') {
        navigate('/');
      }
    }, [status, error, navigate]);
    
  
    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    }

    if (status === 'loading') {
      return <div>Chargement...</div>;
    }
  
    if (status === 'failed') {
      return <div>Erreur : {error}</div>;
    }
    
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
            {profile ? profile.firstName : 'User'}
            </Link>
          <a href='/' onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-sign-out"></i>
            Sign Out
            </a>
        </div>
      </nav>
      {profile && <Profile username={profile.userName} />}
      <Footer />
    </div>
  );
}

export default ProfilePage;