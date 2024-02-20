import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.webformatURL}
          image={image}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
