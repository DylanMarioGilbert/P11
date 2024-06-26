import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import argentBankLogo from '../img/argentBankLogo.png'
import Form from "../components/Form";


function LoginPage () {
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
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <Form />
      <Footer />
    </div>
  );
};

export default LoginPage;