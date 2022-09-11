import React  from "react"
import SimpleImageSlider from "react-simple-image-slider";


import "./SliderImg.css"



export const SliderImg = () => {
  const images = [
    {url: require('../../images/sliderImg/sliderphoto1.png')},
    {url: require('../../images/sliderImg/sliderphoto2.jpg')},
    {url: require('../../images/sliderImg/sliderphoto3.jpg')},
    {url: require('../../images/sliderImg/sliderphoto4.jpg')},
    {url: require('../../images/sliderImg/sliderphoto5.jpg')},
    
]
return (
    <div className='slider'>
      
      <SimpleImageSlider 
        width='90vw'
        height='55vw'
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
)
}