import React from 'react';
import { ThemeProvider } from "./components/theme-provider"
import { ToastContainer } from "react-toastify";
// import './App.css';
import "./styles/globals.css";
import ThemeRoutes from "@/routes";

const App: React.FC = () => (
  <ThemeProvider>
    <ToastContainer 
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      closeOnClick
      theme='dark'
    />
    <ThemeRoutes />
  </ThemeProvider>
);

export default App;
