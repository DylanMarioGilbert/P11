// import React from "react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateUsername } from '../features/user/userSlice'; // Assurez-vous de créer cette action


function Profile({ username }) {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.profile.userName); // Assurez-vous d'accéder correctement au nom d'utilisateur depuis le state

  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(userName || ''); // Utilisez userName comme valeur initiale

  useEffect(() => {
    setNewUsername(userName || ''); // Mettre à jour newUsername si userName change
  }, [userName]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setNewUsername(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUsername(newUsername));
    setIsEditing(false);
  };
  return (
    <main className="main bg-dark">
        <div className="header">
        <h1>Welcome back<br />{userName}</h1>
          {isEditing ? (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={newUsername}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
        )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

  );
}
export default Profile;
