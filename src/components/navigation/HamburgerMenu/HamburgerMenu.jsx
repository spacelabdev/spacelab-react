import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import "./hamburgerMenu.scss";
import { useState } from "react";

/**
 * Renders the hamburger menu for smaller screen sizes.
 *
 *  More information on react-burger-menu can be found here:
 *  https://github.com/negomi/react-burger-menu
 */
function HamburgerMenu() {
		const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
		const [resourcesMenuOpen, setResourcesMenuOpen] = useState(false);


		return (
			<>
				<Menu right>
					<div className="hamburger-nav-links">
						<div className="hamburger-nav-link" onClick={() => setAboutMenuOpen(!aboutMenuOpen)}>Who We Are 
							<span className="fa fa-caret-down" >{aboutMenuOpen ? '╱╲' : '╲╱'}</span>
						</div>
						<div className="dropdown-container" style={{display: aboutMenuOpen ? "flex" : "none"}}>
							<Link className={"hamburger-nav-link"} to={"/about"}>
								About
							</Link>
							<Link className={"hamburger-nav-link"} to={"/projects"}>
								Projects
							</Link>
						</div>

						<div className="hamburger-nav-link" onClick={() => setResourcesMenuOpen(!resourcesMenuOpen)}>Resources 
							<span className="fa fa-caret-down" >{resourcesMenuOpen ? '╱╲' : '╲╱'}</span>
						</div>
						<div className="dropdown-container" style={{display: resourcesMenuOpen ? "flex" : "none"}}>
							{/* <Link className={"hamburger-nav-link"} to={"/podcast"}>
								Podcast
							</Link>
							<Link className={"hamburger-nav-link"} to={"/blog"}>
								Blog
							</Link> */}
							
							<Link className={"hamburger-nav-link"} to={"/discovery"}>
								Discovery
							</Link>
							<Link className={"hamburger-nav-link"} to={"/glossary"}>
								Glossary
							</Link>
						</div>
						<div>
							<Link className={"hamburger-nav-link"} to={"/contact"}>
								Contact
							</Link>
						</div>
						{/* <div>
							<Link className={"hamburger-nav-link"} to={"/donate"}>
								Donate
							</Link>
						</div> */}
						<div className="donate-btn">
							<a
								className="hamburger-donate-link"
								href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
								target="_blank"
								rel="noreferrer"
							>
								Donate
							</a>
						</div>
					</div>
				</Menu>
			</>
		);
}

export default HamburgerMenu;
