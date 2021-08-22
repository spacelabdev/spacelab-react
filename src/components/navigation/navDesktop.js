import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import './navDesktop.css'
import {UniversalContext} from "../../App";

export default function NavDesktop() {
	const context = useContext(UniversalContext);

	// Open and close hamburger menu
	const handleHamburgerToggle = () => {
		let toggle = document.getElementById('toggle');
		if (toggle.className === "open") {
			context.setHamburgerToggle("opening");
			context.setHamburgerToggleIcon('hamburger-toggle opening');
			context.setNavToggle("site-nav-opening");
		}
		else {
			context.setHamburgerToggle("open");
			context.setHamburgerToggleIcon('hamburger-toggle');
			context.setNavToggle("site-nav");
		}
	};

	return (
		<nav id={context.navToggle}>
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
			<div className="hamburger-wrapper">
				<ul id={'toggle'} className={context.hamburgerToggle}>
					<div className="hamburger-logo-container">
						<Link className={'hamburger-logo-nav'} to={'/'} style={{textDecoration: 'none'}}>
							Space Lab
						</Link>
					</div>
					<div className="hamburger-nav-links">
						<div>
							<Link className={'hamburger-nav-link'} to={'/about'} style={{textDecoration: 'none'}}>
								About
							</Link>
						</div>
						<div>
							<Link className={'hamburger-nav-link'} to={'/discovery'} style={{textDecoration: 'none'}}>
								Discovery
							</Link>
						</div>
						<div>
							<Link className={'hamburger-nav-link'} to={'/glossary'} style={{textDecoration: 'none'}}>
								Glossary
							</Link>
						</div>
						<div>
							<Link className={'hamburger-nav-link'} to={'/blog'} style={{textDecoration: 'none'}}>
								Blog
							</Link>
						</div>
					</div>
				</ul>
				<div className={context.hamburgerToggleIcon} onClick={handleHamburgerToggle}>
					<div className="hamburger-icon"/>
				</div>
			</div>
		</nav>
	);
};
