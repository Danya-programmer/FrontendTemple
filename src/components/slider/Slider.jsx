import React  from "react"
import SimpleImageSlider from "react-simple-image-slider";


import "./Slider.css"

const images = [
    { url: 'http://st.gde-fon.com/wallpapers_original/395264_megapolis_les_zveri_1600x1000_www.Gde-Fon.com.jpg' },
    { url: 'https://c.wallhere.com/photos/4a/69/2560x1600_px_landscape_mountain_nature-702818.jpg!d' },
   
]

export const SliderImg = () => {
    
return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
)
}