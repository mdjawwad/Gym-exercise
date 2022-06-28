import { Box } from "@mui/material";
import React, { useState } from "react";
import Exercises from "../components/Exercises";

import HeroSection from "../components/HeroSection";
import SearchExercise from "../components/SearchExercise";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroSection />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
       exercises={exercises}
      />
    </Box>
  );
};

export default Home;
