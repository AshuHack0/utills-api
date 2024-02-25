import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./components/ResumeBuilder/Resume";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";
import axios from 'axios';
import Login from "./components/Login";
import AuthProvider from "./components/ResumeBuilder/builder/components/context/auth";


const getUser = async () => {
  try {
    const response = await axios.get('https://myfuse.in/dashboard/api.php', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.status === 200) {
      throw new Error('Network response was not ok');
    }

    const data = response.data;
    console.log('Data fetched successfully in app.js : ', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



function App() {
 
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserAndSetUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);       
      } catch (error) {
        // window.location.href = "https://myfuse.in/homepage/login";
        console.error('Error setting user:', error);
      }
    };

    fetchUserAndSetUser();


  }, []);


  useEffect(()=>{
    localStorage.removeItem("template");
  },[])


  console.log(`this is user deltails ${user.isauth}`);
   

    return ( 
      <AuthProvider>
    <Routes>
      
      <Route path="/welcome" element={<Resume />} />
      <Route path="/" element={<Welcome/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </AuthProvider>
  );
}

export default App;
