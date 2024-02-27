import React, { useState, useEffect } from 'react';
import { Route, Redirect, Outlet,   Navigate } from 'react-router-dom'; // Import Route and Redirect
import axios from 'axios';
import { useAuth } from '../components/ResumeBuilder/builder/components/context/auth';
import Spinner from './Spinner';

const PrivateRoute = ({ children, ...rest }) => {
  const [ok, setOk] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(`https://myfuseback.vercel.app/api/auth/userauth`, {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
        });
         
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error('Error while checking authentication:', error);
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
  }, []);
       
       return  ok ? <Outlet/> : <Spinner/>;
};

export default PrivateRoute;
