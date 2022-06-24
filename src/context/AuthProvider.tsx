import {
  createContext, useLayoutEffect, useMemo, useState,
} from 'react';
import { useLocation } from 'react-router-dom';

const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  const [auth, setAuth] = useState({});

  const authValue = useMemo(() => ({
    auth, setAuth,
  }), [auth]);

  // scroll to top
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
