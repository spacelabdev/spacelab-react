import React from "react";
import {Link} from 'react-router-dom';
import './navDesktop.css'

export default function NavDesktop() {
	return (
		<nav>
			<Link className={'nav-link'} to={'/'} style={{textDecoration: 'none'}}>
				<div><span>Home</span></div>
			</Link>
			<Link className={'nav-link'} to={'/discovery'} style={{textDecoration: 'none'}}>
				<div><span>Discovery</span></div>
			</Link>
			<Link className={'nav-link'} to={'/glossary'} style={{textDecoration: 'none'}}>
				<div><span>Glossary</span></div>
			</Link>
			<Link className={'nav-link'} to={'/blog'} style={{textDecoration: 'none'}}>
				<div><span>Blog</span></div>
			</Link>
			<Link className={'nav-link'} to={'/about'} style={{textDecoration: 'none'}}>
				<div><span>About</span></div>
			</Link>
		</nav>
	);
};
