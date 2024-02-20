import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import { Modal } from 'components';

export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  toggleModal = () => {
    this.setState(({ isShowModal }) => ({
      isShowModal: !isShowModal,
    }));
  };

  render() {
    const { isShowModal } = this.state;
    const { image } = this.props;

    return (
      <>
        <li className={s.imageGalleryItem}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={s.imageGalleryItem__image}
            loading="lazy"
            onClick={this.toggleModal}
          />
          {isShowModal && (
            <Modal
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              onClose={this.toggleModal}
            />
          )}
        </li>
      </>
    );
  }
}
