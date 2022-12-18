
import { 
  Box,
} from '@chakra-ui/react'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Dslide1.module.css"


export default function Dslideone() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
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


  return (
     <div> 
       {/* ****************** */}
      <Box  className={styles.box}>
         <h1 className={styles.htitle}> Trying Watch Season 1 Free </h1>
        <Slider {...settings} >
        {data1.map((e,i)=>{
            return <Box key={i}className={styles.card}>
                
                <Box className={styles.cardTop} >
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

   }
      