import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  let shouldRedirect;
  // let shouldRedirect = true;

  const { isLoggenIn, isRefreshing } = useAuth();

  shouldRedirect = !isLoggenIn && isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
