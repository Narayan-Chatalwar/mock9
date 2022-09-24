import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filters";
import { getdata } from "../Redux/AppReducer/action";
import { login } from "../Redux/AuthReducer/action";

const Restaurant = () => {
  
  const dispatch = useDispatch();
  
  const appData = useSelector((store) => store.AppReducer.appData);

  const [page, setPage] = useState(1);
  const [searchParams]=useSearchParams();
  const location = useLocation();

 
  

  console.log(appData);
  const token = useSelector((store) => store.AuthReducer.token);
  // console.log(token);



  useEffect(() => {
    if (location || appData.length === 0) {
      // const rating = searchParams.get("rating");
      const price = searchParams.get("price");
      // const filter=searchParams.getAll("filter");
      // console.log(filter);
      const sortBy = searchParams.get("sortBy");
      // const sortByRating=searchParams.get("sortByRating")

      const queryParams = {
        params: {
          filter: searchParams.get("filter"),
          
          
          _sort: sortBy && "Price_starts_from",
          _order: sortBy,

          // _sort:sortByRating && "rating",
          // _order:sortByRating,
        
        },
      };

      dispatch(getdata(queryParams));
    }
  }, [location.search]);

  // useEffect(() => {
  
  //   dispatch(getdata());
  // }, []);

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
        <Link to="/cart">Cart</Link>
        <Link to="/orders">Orders</Link>



      </Flex>
      <Text fontWeight="bold">Token: {token.token}</Text>
    <br/>
    <br/>
   
      {/* //filter */}

      <Filter/>
      <br />
      <br />
      <br />
      
      <Box
        display="grid"
        justifyContent="center"
        gap="20px"
        margin="auto"
        gridTemplateColumns="repeat(auto-fit, minmax(auto, 350px))"
        margin-top="50px"
      >
        {appData.map((item) => (
          <Box
            key={item.id}
            boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
            maxWidth="max-content"
            padding="10px"
            borderRadius="10px"
          >
            <img src={item.image} />
            <Text fontWeight="bold">Name: {item.name}</Text>
            <Text>Votes: {item.number_of_votes}</Text>
            <Text>Price: {item.price_starts_from}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Type: {item.type}</Text>
            <br />
            <Button colorScheme="blackAlpha">Add To Cart</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Restaurant;
