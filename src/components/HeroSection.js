import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBanner from "../assets/images/banner.png";
import '../_app.css'
const HeroSection = () => {
  return (
    <Box
      sx={{
        mt: { lg: "170px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="0px"
      mt='10px'
    >
      <Typography color="#ff2625" fontWeight={600} fontSize="26px">
        Fitness Club  
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb='23px' mt='30px'
      >
        Sweat, Smile <br /> And Repeat .
      </Typography>
      <Typography fontSize="20px" lineHeight="35px" mb={4}>
        Check out the most effective exercises.
      </Typography>
      <Button href="#exercise" variant="contained" color="error" sx={{backgroundColor: '#ff2526', padding: '10px'}}>
        Explore Exercises
      </Button>

      <Typography
        fontSize="200px"
        fontWeight={700}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
        Exercises
      </Typography>
      <img src={HeroBanner} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroSection;
