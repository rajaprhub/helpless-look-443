
import { 
  Box,
} from '@chakra-ui/react'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./slide.module.css"
import "./tlide.css"
import detail from './detail';
 
import { useNavigate} from "react-router-dom"

export default function Slideone() {
  const navigate=useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }

  const handleClick=()=>{
    navigate("/detail")
  }  

  let data1 = [
    {
      imageSrc:
        'https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp',
      title: 'Studio Room',
  
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp',
    title: 'Studio Room',
    },
    {
      imageSrc:
      'https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp',
    title: 'Studio Room',
    },
    {
      imageSrc:
      'https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/738x416.webp',
    title: 'Studio Room',
    },
  ]

  let data2 = [
    {
      imageSrc:
        'https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp',
      title: 'Studio Room',
  
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp',
    title: 'Studio Room',
    },
    {
      imageSrc:
      'https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/738x416.webp',
    title: 'Studio Room',
    },
    {
      imageSrc:
      'https://is4-ssl.mzstatic.com/image/thumb/C7vq4me467uKBCWL8QZA6g/738x416.webp',
    title: 'Studio Room',
    },
  ]

  return (
     <div> 
       {/* ****************** */}
      <Box  className={styles.box}>
         <h1 className={styles.htitle}> Trying Watch Season 1 Free Through This Weekend</h1>
        <Slider {...settings} >
        {data1.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} onClick={handleClick}>
                <img 
                   className='s1img'
                   src={e.imageSrc} alt="" />
                </Box>

            </Box>
        })}
        </Slider>
             {/* <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box> */}
      </Box>

          {/* ****************** */}

          <Box  className= "mpopular">
         <h1 className={styles.htitle}> Most Popular</h1>
        <Slider {...settings} >
        {data2.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} onClick={handleClick}>
                <img 
                   className='s1img'
                   src={e.imageSrc} alt="" />
                </Box>

            </Box>
        })}
        </Slider>
             {/* <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box> */}
      </Box>
          
            {/* ****************** */}
      <Box  className={styles.box}>
         <h1 className={styles.htitle}> Trying Watch Season 1 Free Through This Weekend</h1>
        <Slider {...settings} >
        {data1.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} onClick={handleClick}>
                <img 
                   className='s1img'
                   src={e.imageSrc} alt="" />
                </Box>

            </Box>
        })}
        </Slider>
             {/* <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box> */}
      </Box>

         {/* ****************** */}

         <Box  className= "mpopular">
         <h1 className={styles.htitle}> Most Popular</h1>
        <Slider {...settings} >
        {data2.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} onClick={handleClick}>
                <img 
                   className='s1img'
                   src={e.imageSrc} alt="" />
                </Box>

            </Box>
        })}
        </Slider>
             {/* <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box> */}
      </Box>


      
      <Box  className= "mpopular">
         <h1 className={styles.htitle}> Most Popular</h1>
        <Slider {...settings} >
        {data2.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} onClick={handleClick}>
                <img 
                   className='s1img'
                   src={e.imageSrc} alt="" />
                </Box>

            </Box>
        })}
        </Slider>
             {/* <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box> */}
      </Box>
          
            {/* ****************** */}
      <Box  className={styles.box}>
         <h1 className={styles.htitle}> Trying Watch Season 1 Free Through This Weekend</h1>
        <Slider {...settings} >
        {data1.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} onClick={handleClick}>
                <img 
                   className='s1img'
                   src={e.imageSrc} alt="" />
                </Box>

            </Box>
        })}
        </Slider>
             {/* <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box> */}
      </Box>

         {/* ****************** */}

         <Box  className= "mpopular">
         <h1 className={styles.htitle}> Most Popular</h1>
        <Slider {...settings} >
        {data2.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} onClick={handleClick}>
                <img 
                   className='s1img'
                   src={e.imageSrc} alt="" />
                </Box>

            </Box>
        })}
        </Slider>
             {/* <Box ml="7px" w="99%" borderTop="1px solid" color="gray.300" mt="10px"></Box> */}
      </Box>


     </div>

     
     )

   }
      