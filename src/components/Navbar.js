import { Stack } from "@mui/material";
import React from "react";
import Logo from "/home/jawwad/gym_exercises/src/assets/images/Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Stack
      direction="row"
      // justifyContent="space-around"
      sx={{ gap: { sm: "122px", xs: "40px" }, mt: { sm: "32px", xs: "20px" } }}
      justifyContent="none"
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="19px" alignItems="flex-end">
        <Link
          style={{
            textDecoration: "none",
            color: "#3a1212",
            borderBottom: " 3px solid #ff2625",
          }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: "none", color: "#3a1212" }}
          to="#exercise"
        >
          Exercises
        </Link>
      </Stack>
    </Stack>
  );
}

export default Navbar;
