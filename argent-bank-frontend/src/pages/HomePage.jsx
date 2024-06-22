import React from 'react';
import "./Main.css";
import Footer from '../components/layout/Footer';
import argentBankLogo from '../img/argentBankLogo.png'
import chatIcon from '../img/icon-chat.png';
import moneyIcon from '../img/icon-money.png';
import securityIcon from '../img/icon-security.png';
import Hero from '../components/Hero';
import Features from '../components/Features';


function HomePage () {
  return (
    <div>
    <nav class="main-nav">
      <a class="main-nav-logo" href="/">
        <img
          class="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a class="main-nav-item" href="./login">
          <i class="fa fa-user-circle"></i>
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