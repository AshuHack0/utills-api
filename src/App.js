import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./components/ResumeBuilder/Resume";
import Welcome from "./components/Welcome";

function App() {

  return (
    <Routes>
      <Route path="/welcome" element={<Resume />} />
      <Route path="/" element={<Welcome/>} />
    </Routes>
  );
}

export default App;
