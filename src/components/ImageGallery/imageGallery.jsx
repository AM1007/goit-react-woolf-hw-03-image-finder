import React from 'react';
import { ImageGalleryItem } from 'components';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ images, openModal }) => {
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
