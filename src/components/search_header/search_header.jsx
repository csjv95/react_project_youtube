import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = props => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <img className={styles.logo} src="/images/logo.png" alt="logo"/>
        Youtube
      </h1>
      <input className={styles.input} type="search" id="search" placeholder="Search..."/>
      <button className={styles.button} type="submit">
        <img className={styles.button_img}src="/images/search.png" alt="search"/>
      </button>
    </header>
  );
}

export default SearchHeader;