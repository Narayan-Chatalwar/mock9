import { Image } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" width="100%" height="100vh"/>
    </div>
  )
}

export default Home;