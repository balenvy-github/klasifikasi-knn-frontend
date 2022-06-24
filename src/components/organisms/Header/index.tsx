import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { JWTPayloadTypes } from '../../../services/data-types';
import useAuth from '../../../hooks/useAuth';

export default function Header() {
  const navigate = useNavigate();
  // enable typings
  const { setAuth } : any = useAuth();

  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    nama: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload : JWTPayloadTypes = jwtDecode(jwtToken);
      const userPayload = payload.user;
      setIsLogin(true);
      setUser(userPayload);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove('token');
    setAuth({});
    setIsLogin(false);
    navigate('/login');
  };

  return (
    <nav className="main-header navbar navbar-expand navbar-primary navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="/#" role="button"><i aria-label="pushmenu" className="fas fa-bars" /></a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <div className="nav-link">
            {isLogin && (
            <label className="bg-primary mr-2">
              Hai,
              {' '}
              {user.nama}
              {' '}
              |
            </label>
            )}
            <i onClick={onLogout} style={{ cursor: 'pointer' }} role="presentation" className="fas fa-power-off" />
          </div>
        </li>
      </ul>
    </nav>
  );
}
