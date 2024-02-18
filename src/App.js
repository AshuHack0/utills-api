import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./components/ResumeBuilder/Resume";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";
import axios from 'axios';

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


      //  if (!user.isauth) {
      //        window.location.href = "https://myfuse.in/homepage/login";
      //       return null;  
      //     }

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://myfuse.in/dashboard/api.php', {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //            throw new Error('Network response was not ok');
  //     }
  //     const data = await response.json();
  //       if (!data.isauth) {
  //         //  window.location.href = "https://myfuse.in/homepage/login";
  //         return null;  
  //       }
  //     console.log('Data fetched successfully:', data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };


  // useEffect(() => {
  //   fetchData(); 
  // }, []);
  return (
    <Routes>
      <Route path="/welcome" element={<Resume />} />
      <Route path="/" element={<Welcome/>} />
    </Routes>
  );
}

export default App;
