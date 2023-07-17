import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/spacelab.svg";
import { UniversalContext } from "../../../App";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import AutoScroll from "../../AutoScroll/AutoScroll";
import "./mainNavigation.scss";

/**
 * Renders Navigation Bar
 * @returns {JSX.Element}
 * @constructor
 */
export default function MainNavigation() {
	const context = useContext(UniversalContext);

	return (
		<>
			<div className={"hamburger-wrapper"}>
				<HamburgerMenu />
			</div>
			<nav id={context.navToggle}>
				<div className="nav-wrapper">
					<AutoScroll />
					<div className="logo-container">
						<Link
							className={"logo-nav"}
							to={"/"}
							style={{ textDecoration: "none" }}
						>
							<img src={Logo} alt="logo" />
						</Link>
					</div>
					<div className="nav-links">
						<Link
							className={"nav-link"}
							to={"/about"}
							style={{ textDecoration: "none" }}
						>
							About
						</Link>
						<div to={"#"} className={"nav-dropdown nav-link"}>
							Resources
							<div className={"dropdown-content"}>
								<Link
									className={"nav-link"}
									to={"/projects"}
									style={{ textDecoration: "none" }}
								>
									Projects
								</Link>
								<Link
									className={"nav-link"}
									to={"/discovery"}
									style={{ textDecoration: "none" }}
								>
									Discovery
								</Link>
								<Link
									className={"nav-link"}
									to={"/glossary"}
									style={{ textDecoration: "none" }}
								>
									Glossary
								</Link>
								<Link
									className={"nav-link"}
									to={"/podcast"}
									style={{ textDecoration: "none" }}
								>
									Podcast
								</Link>
							</div>
						</div>
						<Link
							className={"nav-link"}
							to={"/blog"}
							style={{ textDecoration: "none" }}
						>
							Blog
						</Link>
						{/* <Link className={'nav-link'} to={'/donate'} style={{textDecoration: 'none'}}>
							Donate
						</Link> */}
						<a
							className="nav-link"
							href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
							target="_blank"
							rel="noreferrer"
						>
							Donate
						</a>
						<Link
							className={"nav-link"}
							to={"/contact"}
							style={{ textDecoration: "none" }}
						>
							Contact
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
