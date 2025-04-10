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
		const [menuOpen, setMenuOpen] = useState(false);

		return (
			<>
				<Menu right>
					<div className="hamburger-nav-links">
						<div>
							<Link
								className={"hamburger-nav-link"}
								to={"/about"}
								style={{ textDecoration: "none" }}
							>
								About
							</Link>
						</div>
						<div className="hamburger-nav-link" onClick={() => setMenuOpen(!menuOpen)}>Resources 
							<span className="fa fa-caret-down" >{menuOpen ? '╱╲' : '╲╱'}</span>
						</div>
						<div className="dropdown-container" style={{display: menuOpen ? "flex" : "none"}}>
							<Link
								className={"hamburger-nav-link"}
								to={"/projects"}
								style={{ textDecoration: "none" }}
							>
								Projects
							</Link>
							<Link
								className={"hamburger-nav-link"}
								to={"/discovery"}
								style={{ textDecoration: "none" }}
							>
								Discovery
							</Link>
							<Link
								className={"hamburger-nav-link"}
								to={"/glossary"}
								style={{ textDecoration: "none" }}
							>
								Glossary
							</Link>
							{/* // Removed this link until podcast page becomes active. */}
							{/* <Link
								className={"hamburger-nav-link"}
								to={"/podcast"}
								style={{ textDecoration: "none" }}
							>
								Podcast
							</Link> */}
							{/* // Removed until blog page on Medium is back up. */}
							{/* <Link
								className={"hamburger-nav-link"}
								to={"/blog"}
								style={{ textDecoration: "none" }}
							>
								Blog
							</Link> */}
						</div>
						<div>
							<Link
								className={"hamburger-nav-link"}
								to={"/contact"}
								style={{ textDecoration: "none" }}
							>
								Contact
							</Link>
						</div>
						{/* <div>
							<Link
								className={"hamburger-nav-link"}
								to={"/donate"}
								style={{ textDecoration: "none" }}
							>
								Donate
							</Link>
						</div> */}
						<div className="donate-btn">
							<a
								className="hamburger-donate-link"
								href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
								target="_blank"
								rel="noreferrer"
								style={{ textDecoration: "none" }}
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
