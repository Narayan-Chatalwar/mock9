import { Flex,Select,Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const initialtype = searchParams.get("filter");
 
  const initialSortByparams = searchParams.get("sortBy");
  const initialSortByRating = searchParams.get("sortByRating");

  const [type,setType]=useState(initialtype||"");
  const [sortBy, setSortBy] = useState(initialSortByparams || "");
  const [sortByRating,setSortByRating]=useState(initialSortByRating||"");
  

 
  useEffect(() => {

    if (type || sortBy ||sortByRating ) {
      setSearchParams({ filter: type , sortBy: sortBy ,sortByRating:sortByRating  });
    }
  }, [type,setSearchParams,sortBy,sortByRating])



  return (
    <Flex justifyContent="center" gap="20px">
        <Flex>
          <Text fontWeight={"bold"}>Filter by type</Text>
          <Select onChange={(e)=>setType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="fast_food">Fast Food</option>
            <option value="cafe">Cafe</option>
            <option value="casual_dining">Casual Dining</option>
            <option value="fast_food">Fast Food</option>
            <option value="ethnic">Ethnic</option>
          </Select>
        </Flex>
        <Flex>
        <Text fontWeight={"bold"} >Sort by price</Text>
          <Select onChange={(e)=>setSortBy(e.target.value)}>
            <option value="">Sort by price</option>
            <option value="desc">high to low</option>
            <option value="asc">low to high</option>
          </Select>
        </Flex>
        <Flex>
        <Text fontWeight={"bold"}>Sort by Rating</Text>
          <Select onChange={(e)=>setSortByRating(e.target.value)}>
            <option value="">Sort by Rating</option>
            <option value="desc">high to low</option>
            <option value="asc">low to high</option>
          </Select>
        </Flex>
       
      </Flex>
  );
};

export default Filter;
