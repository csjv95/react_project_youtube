import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({onSearch}) => {
  const inputRef = useRef();
  const onKeyPress = event => {
    if(event.key === 'Enter') {
      handleSearch();
    }
  };

  const onClick = () => {
    handleSearch();
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    inputRef.current.value = '';
    onSearch(value);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <img className={styles.logo} src="/images/logo.png" alt="logo"/>
        Youtube
      </h1>
      <input ref={inputRef} className={styles.input} type="search" id="search" placeholder="Search..." onKeyPress={onKeyPress}/>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.button_img}src="/images/search.png" alt="search"/>
      </button>
    </header>
  );
}

export default SearchHeader;