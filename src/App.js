import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./components/ResumeBuilder/Resume";
import Welcome from "./components/Welcome";
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState([]);
  useEffect(() => {
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
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setUser(data);
  
        console.log('Data fetched successfully:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData(); 
   
  }, []);
  
  // console.log(user.isauth);
  
  if (user.isauth==false) {
    window.location.href = "https://myfuse.in/home";
    return null;  
  }
  return (
    <Routes>
      <Route path="/welcome" element={<Resume />} />
      <Route path="/" element={<Welcome/>} />
    </Routes>
  );
}

export default App;
