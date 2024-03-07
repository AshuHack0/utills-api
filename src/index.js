import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./components/ResumeBuilder/builder/components/context/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <GoogleOAuthProvider clientId="357146799127-ffdktnts01tqbj4johpc2pqr98mn27tb.apps.googleusercontent.com">
        <Toaster />
        <AuthProvider>
          <App />
        </AuthProvider>
      </GoogleOAuthProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
