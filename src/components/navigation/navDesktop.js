import React from "react";
import {Link} from 'react-router-dom';
import './navDesktop.css'

export default function NavDesktop() {
	return (
		<nav>
			<div className="nav-wrapper">
				<div className="logo-container">
					<Link className={'logo-nav'} to={'/'} style={{textDecoration: 'none'}}>
						Space Lab
					</Link>
				</div>
				<div className="nav-links">
					<Link className={'nav-link'} to={'/about'} style={{textDecoration: 'none'}}>
						About
					</Link>
					<Link className={'nav-link'} to={'/discovery'} style={{textDecoration: 'none'}}>
						Discovery
					</Link>
					<Link className={'nav-link'} to={'/glossary'} style={{textDecoration: 'none'}}>
						Glossary
					</Link>
					<Link className={'nav-link'} to={'/blog'} style={{textDecoration: 'none'}}>
						Blog
					</Link>
				</div>
			</div>
		</nav>
	);
};
