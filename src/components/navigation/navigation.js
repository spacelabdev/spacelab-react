import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import Logo from "../../assets/spacelab.svg";
import './navigation.scss'
import {UniversalContext} from "../../App";
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu";

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
							<img src={Logo}/>
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
		</>
	);
};
