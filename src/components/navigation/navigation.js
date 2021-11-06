import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Logo from "../../assets/spacelab.svg";
import {UniversalContext} from "../../App";
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu";
import './navigation.scss'

/**
 * Renders Navigation Bar
 * @returns {JSX.Element}
 * @constructor
 */
export default function Navigation() {
	const context = useContext(UniversalContext);

	return (
		<>
			<div className={'hamburger-wrapper'}>
				<HamburgerMenu/>
			</div>
			<nav id={context.navToggle}>
				<div className="nav-wrapper">
					<div className="logo-container">
						<Link className={'logo-nav'} to={'/'} style={{textDecoration: 'none'}}>
							<img src={Logo} alt="logo" />
						</Link>
					</div>
					<div className="nav-links">
						<Link className={'nav-link'} to={'/about'} style={{textDecoration: 'none'}}>
							About
						</Link>
						<Link className={'nav-link'} to={'/projects'} style={{textDecoration: 'none'}}>
							Projects
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
						<Link className={'nav-link'} to={'/contact'} style={{textDecoration: 'none'}}>
							Contact
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};
