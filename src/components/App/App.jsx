import React, { Component } from 'react';
import * as api from '../../services/api';
import { SearchForm, ImageGallery, Button, Loader } from 'components';

export class App extends Component {
  state = {
    searchText: '',
    page: 1,
    images: [],
    showBtn: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;
    if (searchText !== prevState.searchText || page !== prevState.page) {
      this.setState({ isLoading: true });
      api
        .getImages(searchText, page)
        .then(({ hits, totalHits }) => {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: page < Math.ceil(totalHits / 12),
          }));
        })
        .catch()
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSubmit = searchText => {
    this.setState({ searchText, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, showBtn, isLoading } = this.state;
    return (
      <>
        <SearchForm handleSubmit={this.handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p
            style={{
              padding: 100,
              textAlign: 'center',
              fontSize: 20,
            }}
          >
            Image gallery is empty..
          </p>
        )}
        {showBtn && <Button onClick={this.handleLoadMore} />}
        {isLoading && <Loader />}
      </>
    );
  }
}
