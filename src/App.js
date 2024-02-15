import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./components/ResumeBuilder/Resume";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState([]);


  const fetchData = async () => {
    try {
      const response = await fetch('https://myfuse.in/dashboard/api.php', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
             window.location.href = "https://myfuse.in/home";
             throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUser(data);
        console.log(data.isauth);
        if (!data.isauth) {
           window.location.href = "https://myfuse.in/home";
          return null;  
        }
      console.log('Data fetched successfully:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);
 
  
  return (
    <Routes>
      <Route path="/welcome" element={<Resume />} />
      <Route path="/" element={<Welcome/>} />
    </Routes>
  );
}

export default App;
