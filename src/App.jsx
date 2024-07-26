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
        <div className="bg-green-50 min-h-screen bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <Master />
        </div>
        <Footer />
    </>
  );
}

export default App;
