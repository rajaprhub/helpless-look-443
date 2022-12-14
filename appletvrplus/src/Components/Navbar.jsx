import React from 'react'
// import { Link as RouterLink} from 'react-router-dom';
import Homepage from './HomePage';
import Login from './Login';
import { Link } from 'react-router-dom';
import {useNavigate}from "react-router-dom"
import {
Box,
Button,
Center,
Image,
Flex,
Spacer,
Input,
} from "@chakra-ui/react"

const Navbar = () => {

  const navigate=useNavigate()
  let handleInput=()=>{
    navigate("/search")
  }
  let handleclick=()=>{
    navigate("/")
  }
  return (
    <Box 
    border="none" 
    alignItems= "center"
    p="0.5rem" 
    bgColor="black" 
    pl="2rem" 
    pr="2rem"  
    pos="sticky" 
    top="0" 
    left="0"
    zIndex={1}
    >
    <Flex  alignItems= "center">
      <div h="32px" ml="1rem" border="1px solid red" > 
          <Image src={'https://cdn.pixabay.com/photo/2022/09/18/18/40/apple-logo-7463795__340.png'} alt='err' w="52px" h="40px" />
      </div>
      <Spacer/>
      <Box display="flex" bgColor="gray"  alignItems= "center" border="1px solid whitesmoke " borderRadius="8px" mr="10px">
          <p  bgColor="white" >&#169;</p>
          <Input variant='unstyled'   bgColor="black"  placeholder="Search" ml="6px" color="white" />
      </Box>
      <Box  bgColor="black" color="white"  >
         <Link  h="32px" ml="-1rem" colorScheme='black'   to="/login">SignIn </Link>
      </Box>
        
    </Flex>
    </Box>
  )
}

export default Navbar