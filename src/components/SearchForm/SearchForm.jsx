import React, { Component } from 'react';
import s from './SearchForm.module.css';

import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';

class SearchForm extends Component {
  state = { value: '' };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // Запис тексту, введеного в інпут, в стан class SearchForm

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ value: value });
  };

  // Запис поточного стану в пропс onSubmit

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className={s.searchForm} onSubmit={this.handleSubmit}>
        <button
          onSubmit={this.handleSubmit}
          type="submit"
          className={s.searchForm__button}
        >
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
              <FiSearch />
            </div>
          </IconContext.Provider>

          <span className={s.ComponentsearchForm__button__labe}></span>
        </button>
        <input
          type="text"
          name="qwery"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search images and photos"
          className={s.searchForm__input}
          autoComplete="off"
          autoFocus
        ></input>
      </form>
    );
  }
}
export default SearchForm;
