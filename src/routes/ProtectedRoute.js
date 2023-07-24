import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to={'/login'} replace />;
  }

  return children;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
