import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = props => {
  const { hit, onClick } = props;
  return (
    <li className={s.imageGalleryItem} id={hit.id} onClick={onClick}>
      <img
        src={hit.webformatURL}
        alt={hit.tags}
        data-src={hit.largeImageURL}
        loading="lazy"
        className={s.imageGalleryItem__image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  hit: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
