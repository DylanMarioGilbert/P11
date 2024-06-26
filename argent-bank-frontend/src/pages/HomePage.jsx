import React from 'react';
import "./Main.css";
import Footer from '../components/layout/Footer';
import argentBankLogo from '../img/argentBankLogo.png'
import Hero from '../components/Hero';
import Features from '../components/Features';


function HomePage () {
  return (
    <div>
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    <main>
        <Hero />
        <Features />
    </main>
      <Footer />
    </div>
  );
};

export default HomePage;