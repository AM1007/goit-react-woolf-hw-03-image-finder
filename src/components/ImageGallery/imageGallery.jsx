import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = props => {
  const { hits, onClick } = props;

  return (
    <ul className={s.imageGallery}>
      {hits.map(hit => {
        return <ImageGalleryItem key={hit.id} hit={hit} onClick={onClick} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
