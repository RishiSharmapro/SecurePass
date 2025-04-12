/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Master from "./components/Master";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <LandingPage />
          <Footer />
        </>
      ),
    },
    {
      path: "/master",
      element: (
        <>
          <Navbar />
          <Master />
          <Footer />
        </>
      ),
    }
  ]);
 
  return (
    <>
        <RouterProvider router={route} />
        <div>
        </div>
    </>
  );
}

export default App;
