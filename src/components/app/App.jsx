import { useEffect, lazy } from "react";

import {
  Routes,
  Route,
  // useNavigate
} from "react-router-dom";

import ProtectedRoute from "routes/ProtectedRoute";


import { useAuth } from "hooks/index";

import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";

import { RotatingLines } from 'react-loader-spinner';

import { Layout } from "components/Layout/Laylout";


const Home = lazy(() => import('pages/homePage/HomePage'));
const Register = lazy(() => import('pages/registerPage/RegisterPage'));
const Login = lazy(() => import('pages/loginPage/LoginPage'));
const Contacts = lazy(() => import('pages/contactsPage/ContactsPage'));
const NotFound = lazy(() => import('pages/notFoundPage/NotFoundPage'));

const App = () => {

  const {
    isLoggedIn,
    isRefreshing
  } = useAuth();

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("/contacts");
  //   }
  // }, [isLoggedIn])
  


  if (isRefreshing) {
    return <RotatingLines
            strokeColor="rgb(11, 127, 171)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
  }
    

  return (
    <Routes>  
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/signup" element={<Register />} />
          <Route path="contacts" element={
            <ProtectedRoute isLoggedIn={{ isLoggedIn }}>
              <Contacts/>
            </ProtectedRoute>
            } />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
};

export default App;

