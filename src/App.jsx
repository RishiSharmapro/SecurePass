import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Master from "./components/Master";
import Footer from "./components/Footer";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /> </>,
    },
  ]);

  return (
    <>
        <RouterProvider router={route} />
        <div className="min-h-[90vh]">
        <Master />
        </div>
        <Footer />
    </>
  );
}

export default App;
