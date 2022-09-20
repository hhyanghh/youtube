import styles from './search_header.module.css'

import React from 'react';
import { useRef } from 'react';

const SearchHeader = ({onSearch}) => {
	const inputRef = useRef();
	const handleSearch = () => {
		const value = inputRef.current.value;
		// 검색하는 값을 props로 받아와야 한다.
		// console.log(value);
		onSearch(value);
	}
	const onClick = () => {
		handleSearch();
	};
	const onkeyPress = (event) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};
		return(
			<header className={styles.header}>
				<div className={styles.logo}>
					<img className={styles.img} src="/images/logo.png" alt="logo" />
					<h1 className={styles.title}>Youtube</h1>
				</div>
				<input ref={inputRef} className={styles.input} type="search" placeholder="검색어를 입력하세요" onKeyPress={onkeyPress}/>
				<button className={styles.button} type="submit" onClick={onClick}>
					<img className={styles.buttonImg} src="/images/search.png" alt="search" />
				</button>
			</header>
		)
};

export default SearchHeader;