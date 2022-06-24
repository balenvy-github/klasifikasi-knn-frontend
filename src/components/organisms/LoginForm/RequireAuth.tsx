import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import {
  Navigate, Outlet, useLocation,
} from 'react-router-dom';
import { JWTPayloadTypes, UserTypes } from '../../../services/data-types';
// import useAuth from '../../../hooks/useAuth';

// enable typings
function RequireAuth({ allowedRoles } : any) {
  // typings needed
  // const auth : any = useAuth();
  const location = useLocation();

  const cookiesToken = Cookies.get('token');
  let level;
  if (cookiesToken) {
    const jwtToken = atob(cookiesToken);
    const payload : JWTPayloadTypes = jwtDecode(jwtToken);
    const userPayload : UserTypes = payload.user;
    level = userPayload.level;
  }

  return (
    level === allowedRoles
      ? <Outlet />
      : cookiesToken
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );

  // return (
  //   auth?.auth?.user?.level === allowedRoles
  //     ? <Outlet />
  //     : auth?.auth?.user
  //       ? <Navigate to="/unauthorized" state={{ from: location }} replace />
  //       : <Navigate to="/login" state={{ from: location }} replace />
  // );
}

export default RequireAuth;
