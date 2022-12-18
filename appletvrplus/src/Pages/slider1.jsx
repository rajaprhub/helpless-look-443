
import { 
  Box,
} from '@chakra-ui/react'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./slide.module.css"
import "./tlide.css"
// import { Link } from 'react-router-dom';
import {useNavigate}from "react-router-dom"
 


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
    navigate("/Details")
  }  

  let data1 = [
    {
      imageSrc:
        'https://is1-ssl.mzstatic.com/image/thumb/NuIOgsGJ11I4jRoa7-GbSA/738x416.webp',
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
      'https://is5-ssl.mzstatic.com/image/thumb/xq9mcYu6NXUtGcDJMMfc5w/738x416.webp',
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
        'https://is2-ssl.mzstatic.com/image/thumb/a_voEGGOjHGvUUhwrbStXQ/738x416.webp',
      title: 'Studio Room',
  
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'https://is1-ssl.mzstatic.com/image/thumb/gkWjLqLfF8Pahc6a6Udtxg/738x416.webp',
    title: 'Studio Room',
    },
    {
      imageSrc:
      'https://is3-ssl.mzstatic.com/image/thumb/EuF6BWsgBeic_Ap2qeAGBQ/738x416.webp',
    title: 'Studio Room',
    },
    {
      imageSrc:
      'https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/738x416.webp',
    title: 'Studio Room',
    },
  ]
  const data3 = [
    {
      imageSrc:
        'https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/738x416.webp',
      title: 'Studio Room',
  
      features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp',
    },
    {
      imageSrc:
      'https://is1-ssl.mzstatic.com/image/thumb/kjrFHClZ3Bt-pT0MJnwdFw/738x416.webp',
    },
    {
      imageSrc:
      'https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/738x416.webp',
     },
   ]

   const data4 = [
    {
      imageSrc:
        'https://is5-ssl.mzstatic.com/image/thumb/lgskq6n1xkUI5DOyA5tWWQ/1478x832.webp',
      title: 'Studio Room',
       features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'https://is5-ssl.mzstatic.com/image/thumb/BG3rKYXaPe9KkpZOZUjj_w/1478x832.webp',
    },
    {
      imageSrc:
      'https://is2-ssl.mzstatic.com/image/thumb/h3TFbeh9Dz-zmR7hMf0Jcw/1478x832.webp',
    },
    {
      imageSrc:
      'https://is4-ssl.mzstatic.com/image/thumb/ba3Q2gHzrcpC69JvKRy_bg/1478x832.webp',
     },
   ]

   const data5 = [
    {
      imageSrc:
        'https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/40/a5/6a/40a56a15-9da2-967c-d69b-a5052bb404c5/89d54294-ded9-4ccc-859b-d5c5442c7682.lsr/1478x832fe.webp',
      title: 'Studio Room',
       features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/f8/7b/74/f87b74f9-ef7d-66c7-de75-6f621b9b800a/8c24d846-b3ad-4283-8424-4c055824358b.lsr/1478x832fe.webp',
    },
    {
      imageSrc:
      'https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/50/62/c0/5062c0ba-9947-951a-9746-c2a8a6bbcb1d/3f5b9e26-ff9a-417a-aa68-88b07170a907.lsr/1478x832fe.webp',
    },
    {
      imageSrc:
      'https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/df/1f/ee/df1feed6-5421-226d-8f83-80b25917a79c/aa243d71-7f71-4e3a-8f1c-53fc8af38cd2.lsr/1478x832fe.webp',
     },
   ]

   const data6 = [
    {
      imageSrc:
        'https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/a7/e2/f7/a7e2f78d-6be4-4810-989e-cef0148e3517/c8b76984-dbbf-4ad4-8bff-f94a0bd6581a.lsr/1478x832fe.webp',
      title: 'Studio Room',
       features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/ea/8b/69/ea8b69cd-2525-3e95-8f03-d81e0a9be25a/c0be3d33-1c8c-4c6b-9fc5-f11cefff57c0.lsr/1478x832fe.webp',
    },
    {
      imageSrc:
      'https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/2b/ab/f9/2babf96d-f31e-1b96-b45b-9fcaef0f4c18/b8b31a10-4033-4d13-824a-89d7caadfecb.lsr/1478x832fe.webp',
    },
    {
      imageSrc:
      'https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/b1/f7/7a/b1f77a9b-17d9-8d83-50c7-bf927ccc9774/930b5cd5-280b-48d8-9d77-7e91bb2e44c4.lsr/1478x832fe.webp',
     },
   ]

   
   const data7 = [
    {
      imageSrc:
        'https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/7f/a6/73/7fa673cd-a374-f92b-39ce-d6225bc2085c/d4c433fc-e095-43b1-a773-f9dc31b61fe3.lsr/738x416.webp',
      title: 'Studio Room',
       features: ['Free Wifi', 'Free breakfast'],
    },
    {
      imageSrc:
      'https://is3-ssl.mzstatic.com/image/thumb/uOy_uvKZZkurSII-QkH1cg/738x416.webp',
    },
    {
      imageSrc:
      'https://is3-ssl.mzstatic.com/image/thumb/Video113/v4/ce/7b/70/ce7b7099-6a2c-9183-0da7-40fb57571a00/Bourne_Ultimatum_3840x2160_CoverArt.lsr/738x416.webp',
    },
    {
      imageSrc:
      'https://is4-ssl.mzstatic.com/image/thumb/Video113/v4/a4/39/be/a439be29-4c3b-278f-194f-b914d7fa5bd7/PAR_MISSION_IMPOSSIBLE_3_WW_ARTWORK_EN_3840x2160_1MF9LK000000CH.lsr/738x416.webp',
     },
   ]

  return (
     <div> 
       {/* ****************** */}
      <Box  className={styles.box}>
         <h1 className={styles.htitle}> Watch Premieres for Free </h1>
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
          
      
           <Box  className={styles.box}>
         <h1 className={styles.htitle}> Watch Entire Seasons </h1>
        <Slider {...settings} >
        {data3.map((e,i)=>{
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
         <h1 className={styles.htitle}> Latest originals </h1>
        <Slider {...settings} >
        {data4.map((e,i)=>{
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

    
          <div className='wseries'>
          <h1 className='whseries'>watch Series</h1>
            <div >
                <img width="99%" src="https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/69/26/cb/6926cb49-3cdd-7db7-69c2-ed1d86d24265/e864cc33-c756-468f-983a-c8c1c2bb1adb.lsr/1478x832fe.webp" alt="err"  />
            </div>
 
          </div>
               {/* ****************** */}

               <Box  className={styles.box}>
         <h1 className={styles.htitle}> Non Fictional & Film series </h1>
        <Slider {...settings} >
        {data5.map((e,i)=>{
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

          {/* ****************** */}

          <Box  className={styles.box}>
         <h1 className={styles.htitle}> Kids and Family</h1>
        <Slider {...settings} >
        {data6.map((e,i)=>{
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

     {/* ****************** */}

     <Box  className={styles.box}>
         <h1 className={styles.htitle}> Included with Apple TV+</h1>
        <Slider {...settings} >
        {data7.map((e,i)=>{
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




     </div>
     )

   } ;
      