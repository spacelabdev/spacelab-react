import React, {useContext, useState} from "react";
import {Link} from 'react-router-dom';
import Logo from "../../assets/spacelab.svg";
import './navigation.scss'
import {UniversalContext} from "../../App";
import HamburgerMenu from "../hamburgerMenu/hamburgerMenu";
import Dropdown from "../dropdown/dropdown";
import Button from "../searchButton/searchButton"

export default function Navigation() {
	const context = useContext(UniversalContext);
	const [click, setClick] = useState(false);	
	const handleClick = () => setClick(!click)


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
						<Dropdown/>
						<Link className={'nav-link'} to={'/project'} style={{textDecoration: 'none'}}>
							Project
	
						</Link>
 
						<Link className={'nav-link'} to={'/donate'} style={{textDecoration: 'none'}}>
							Donate
	
						</Link>
 
					{	/*<Link className={'nav-link'} to={'/discovery'} style={{textDecoration: 'none'}}>
							Discovery 
							
						</Link>
						<Link className={'nav-link'} to={'/glossary'} style={{textDecoration: 'none'}}>
							Glossary
						</Link>
						<Link className={'nav-link'} to={'/blog'} style={{textDecoration: 'none'}}>
							Blog
						</Link>*/}
						<Link className={'nav-link'} to={'/contact'} style={{textDecoration: 'none'}}>
							Contact
						</Link>
						<Button />
						<div className='menu-icon' onClick={handleClick}>
							<i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
						</div>
					</div>
				    

				</div>
			</nav>
			
		</>
		
	);
};
