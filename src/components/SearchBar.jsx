import React from 'react';
import styles from './SearchBar.module.css';
import {IoSearchOutline} from 'react-icons/io5';

export default function SearchBar({onSearch}) {
  // acá va tu código
  function handleOnSearch() {
    if(typeof onSearch === "function") {
      const input = document.getElementById("search-bar-input")
      onSearch(input.value)
    }
  }
  return ( 
  <div className={styles.searchBar}> 
    <input  placeholder="Agrega una nueva Ciudad ..." id="search-bar-input"/>
    <button  onClick={handleOnSearch}><IoSearchOutline/></button>
 </div>
     )
};