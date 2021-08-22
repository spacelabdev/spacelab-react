import React from 'react';
import {Link} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './hamburgerMenu.scss';

/**
 *  More information on react-burger-menu can be found here:
 *  https://github.com/negomi/react-burger-menu
 */
class HamburgerMenu extends React.Component {
	render () {
		return (
			<>
				<Menu right>

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

					{/*<Link to={'/dashboard'} style={{textDecoration: 'none'}}>*/}
					{/*	/!*<div className="menu-logo">*!/*/}
					{/*	/!*	<img className="fetch-menu" src={Logo} alt='Fetch!'/>*!/*/}
					{/*	/!*</div>*!/*/}
					{/*</Link>*/}

					{/*<div className="menu-profile">*/}
					{/*	<Link to={'/profile'} style={{textDecoration: 'none'}}>*/}
					{/*		<img className="user-photo" src={Pup} alt='Photo'/>*/}
					{/*		<h1 className="user-name">{this.props.userName}</h1>*/}
					{/*	</Link>*/}
					{/*	<Link to={'/login'} style={{textDecoration: 'none'}}>*/}
					{/*		<p className="profile-action">Sign Out</p>*/}
					{/*	</Link>*/}
					{/*</div>*/}

					{/*<Link to={'/dashboard'} style={{textDecoration: 'none'}}>*/}
					{/*	<img className="user-home" src={House} alt='Home'/>*/}
					{/*	<div className="menu-home">Home</div>*/}
					{/*</Link>*/}

					{/*<Link to={'/addpet'} style={{textDecoration: 'none'}}>*/}
					{/*	<img className="user-pets" src={Paw} alt='Pets'/>*/}
					{/*	<div className="menu-pets">Add Pet</div>*/}
					{/*</Link>*/}

					{/*<Link to={'/our-team'} style={{textDecoration: 'none'}}>*/}
					{/*	<img className="about-team" src={Ball} alt='Our Team'/>*/}
					{/*	<div className="menu-about">Our Team</div>*/}
					{/*</Link>*/}

				</Menu>
			</>
		);
	}
}

export default HamburgerMenu;
