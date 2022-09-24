import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const token = useSelector((store) => store.Auth);
  
  return (
    <Box>
      <Flex
        gap="20px"
        justifyContent="space-between"
        padding="20px"
        background="gray"
        color="white"
        fontWeight="black"
      >
        <Link to="/restaurant">Restaurant</Link>
        <Link to="/login">Login</Link>
      </Flex>

      <Box></Box>
    </Box>
  );
};

export default Navbar;
