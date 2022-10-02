import ImageGallery from 'react-image-gallery';
import React from 'react';
import  classes  from "./Photogallery.module.css";
export const PhotoGallery = (props) => {

    const images = []
    for (let index = 0; index < props.data.length; index++) {
      let photo = {
        original: props.data[index].image,
        thumbnail: props.data[index].image,
      }
      images.push(photo)
    }
   
    return(
        <div className={classes.PhotoGallery}>
    <ImageGallery items={images} key={images} showPlayButton={false} showNav={true} />
    </div>
    )
}

