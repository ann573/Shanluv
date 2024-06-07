import React from 'react'
import  Masonry,{ResponsiveMasonry } from 'react-responsive-masonry'

import galleryImg01 from '../../assets/images/gallery01.jpg'
import galleryImg02 from '../../assets/images/gallery02.jpg'
import galleryImg03 from '../../assets/images/gallery03.jpg'
import galleryImg04 from '../../assets/images/gallery04.jpg'
import galleryImg05 from '../../assets/images/gallery05.jpg'
import galleryImg06 from '../../assets/images/gallery06.jpg'
import galleryImg07 from '../../assets/images/gallery07.jpg'
import galleryImg08 from '../../assets/images/gallery08.jpg'
  const galleryImages = [
    galleryImg01,
    galleryImg03,   
    galleryImg02,
    galleryImg06, 
    galleryImg07,
    galleryImg05,
    galleryImg04,
    galleryImg08,
]
const ImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{576:1, 768:3, 992:4}}>
        <Masonry gutter='1.1rem'>
            {
              galleryImages.map((item,index) =>(
              <img src={item}  className='masonry_img'
              key={index} 
              
              style={{width: "100%", display:"block", borderRadius: "10px"}} />
              ))
            }
        </Masonry>
    </ResponsiveMasonry>
  );
};

export default ImagesGallery