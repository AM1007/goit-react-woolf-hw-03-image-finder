import React, { Component } from 'react';
import s from './SearchForm.module.css';

import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';

export class SearchForm extends Component {
  state = {
    searchText: '',
  };

  handleChange = evt => {
    this.setState({ searchText: evt.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.handleSubmit(this.state.searchText.trim());
    this.setState({ searchText: '' });
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchForm__button}>
            <IconContext.Provider value={{ size: '1.5em' }}>
              <div>
                <FiSearch />
              </div>
            </IconContext.Provider>
          </button>
          <input
            type="text"
            name="searchQuery"
            value={this.state.searchText}
            onChange={this.handleChange}
            placeholder="Search images and photos"
            className={s.searchForm__input}
            autoComplete="off"
            autoFocus
          ></input>
        </form>
      </header>
    );
  }
}
