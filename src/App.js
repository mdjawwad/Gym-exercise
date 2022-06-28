import { Box } from '@mui/material'

import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import "./_app.css";
function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
