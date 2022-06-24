import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { setLogin } from '../../../services/auth';
import { JWTPayloadTypes } from '../../../services/data-types';
import useAuth from '../../../hooks/useAuth';

export default function LoginForm() {
  // typings needed
  const { setAuth } : any = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };
    if (!email || !password) {
      toast.error('Email dan Password harus diisi!');
    } else {
      const response = await setLogin(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success('Login Berhasil');
        const token = response.data.data.accessToken;
        const tokenBase64 = btoa(token);
        Cookies.set('token', tokenBase64, { expires: 1 });

        const payload : JWTPayloadTypes = jwtDecode(token);
        const { user } = payload;
        setAuth({ user, tokenBase64 });
        navigate('/');
      }
    }
  };

  return (
    <form action="" method="post" autoComplete="true">
      <div className="input-group mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-envelope" />
          </div>
        </div>
      </div>
      <div className="input-group mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <span className="fas fa-lock" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={onSubmit}
          >
            LogIn
          </button>
        </div>
      </div>
    </form>
  );
}
