import React from 'react';
import '../assets/css/header.css';

function Header(props) {
	const birds = [ 'Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
	const listBirds = birds.map((item, i) =>
		<li key={item} className={i <= props.page ? 'page-item active' : 'page-item'}>
			<a className="page-link" href="/#">{item}</a>
		</li>
	);
	return (
		<header className="d-flex">
			<div className="top-panel d-flex">
				<div className="logo"></div>
				<h5>Score: 
					<span className="score"> { props.score }</span>
				</h5>
			</div>
			<ul className="pagination">
				{listBirds}
			</ul>
		</header>
	);
}

export default Header;
