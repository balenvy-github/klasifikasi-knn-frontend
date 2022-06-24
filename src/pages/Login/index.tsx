import React from 'react';
import LoginForm from '../../components/organisms/LoginForm';

export default function Login() {
  return (
    <div className="login-page">

      <div className="login-box">
        <div className="login-logo">
          <a href="#">
            <b>LOG</b>
            IN
          </a>
        </div>

        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Login to start your session</p>
            <LoginForm />
          </div>

        </div>
      </div>
    </div>
  );
}
