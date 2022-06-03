import React from 'react';
import {Link} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu';
import './hamburgerMenu.scss';

/**
 *  More information on react-burger-menu can be found here:
 *  https://github.com/negomi/react-burger-menu
 */
class HamburgerMenu extends React.Component {
	render() {
		return (
			<>
				<Menu right>
					<div className="hamburger-nav-links">
						<div>
							<Link
								className={"hamburger-nav-link"}
								to={"/about"}
								style={{textDecoration: "none"}}
							>
								About
							</Link>
						</div>
						<div>
							<Link
								className={"hamburger-nav-link"}
								to={"/discovery"}
								style={{textDecoration: "none"}}
							>
								Discovery
							</Link>
						</div>
						<div>
							<Link
								className={"hamburger-nav-link"}
								to={"/projects"}
								style={{textDecoration: "none"}}
							>
								Projects
							</Link>
						</div>
						<div>
							<Link
								className={"hamburger-nav-link"}
								to={"/glossary"}
								style={{textDecoration: "none"}}
							>
								Glossary
							</Link>
						</div>
						<div>
							<Link
								className={"hamburger-nav-link"}
								to={"/blog"}
								style={{textDecoration: "none"}}
							>
								Blog
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
						<a
							className="hamburger-nav-link"
							href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
							target="_blank"
							rel="noreferrer"
							style={{textDecoration: "none"}}
						>
							Donate
						</a>
						<div>
							<Link
								className={"hamburger-nav-link"}
								to={"/contact"}
								style={{textDecoration: "none"}}
							>
								Contact
							</Link>
						</div>
					</div>
				</Menu>
			</>
		);
	}
}

export default HamburgerMenu;
