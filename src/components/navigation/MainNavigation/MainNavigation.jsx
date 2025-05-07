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
		<div className="outer-container">

			<nav id={context.navToggle}>
				<div className={"hamburger-wrapper"}>
					<HamburgerMenu />
				</div>
				<div className="nav-wrapper" >
					<AutoScroll />

					<div className="logo-container">
						<Link className={"logo-nav"} to={"/"}>
							<img src={Logo} alt="logo" />
						</Link>
					</div>

					<ul className="nav-links">
						<li className={"nav-dropdown nav-link"}>
							<span className={"dropdown-nav-name"}>Who We Are</span>
							<ul className={"dropdown-content"}>
								<li>
									<Link className={"nav-link"} to={"/about"}>
										About
									</Link>
								</li>
								<li>
									<Link className={"nav-link"} to={"/projects"}>
										Projects
									</Link>
								</li>
							</ul>
						</li>

						<li className={"nav-dropdown nav-link"}>
							<span className={"dropdown-nav-name"}>Resources</span>
							<ul className={"dropdown-content"}>
								{/*
								<li>
									<Link className={"nav-link"} to={"/blog"}>
										Blog
									</Link>
								</li>
								<li>
									<Link className={"nav-link"} to={"/podcast"}>
										Podcast
									</Link>
								</li>
								*/}
								<li>
									<Link className={"nav-link"} to={"/glossary"}>
										Glossary
									</Link>
								</li>
								<li>
									<Link className={"nav-link"} to={"/discovery"}>
										Discovery
									</Link>
								</li>

							</ul>
						</li>

						<li>
							<Link className={"nav-link"} to={"/contact"}>
								Contact
							</Link>
						</li>
						<li>
							<a
								className="nav-link donate-page-link"
								href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
								target="_blank"
								rel="noreferrer"
							>
								Donate
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
