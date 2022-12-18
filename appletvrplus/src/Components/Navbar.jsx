import React from 'react'
// import { Link as RouterLink} from 'react-router-dom';
import Homepage from '../Pages/HomePage';
import SignBtn from './SignIn';
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
    color=  'white'
    zIndex={1} 
    >
      
   

    <Flex  alignItems= "center">
      
     

      <Button h="32px" ml="-1rem" colorScheme='black' onClick={handleclick}><Image 
       src={"https://wallpaper.dog/large/17112198.jpg"} 
       alt='' w="52px" h="30px" /></Button>
      <Spacer/>

      <Box display="flex" bgColor="gray"  alignItems= "center" border="1px solid whitesmoke " borderRadius="8px" mr="10px">
          <p  bgColor="white" >&#169;</p>
          <Input variant='unstyled'   bgColor="black"  placeholder="Search" ml="6px" color="white" />
      </Box>

     
         <SignBtn/>
        
     </Flex>
    </Box>
  )
}

export default Navbar