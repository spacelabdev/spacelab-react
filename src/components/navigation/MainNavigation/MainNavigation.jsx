import React, { useContext, useEffect, useState } from "react";
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
	const [stickyClass, setStickyClass] = useState({});

	// Set up event listener for scroll to make navbar sticky
	useEffect(() => {
	  window.addEventListener('scroll', stickNavbar);
  
	  return () => {
		window.removeEventListener('scroll', stickNavbar);
	  };
	}, []);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			windowHeight > 0
				? setStickyClass({
						position: "fixed"
				  })
				: setStickyClass({});
		}
	};

	return (
		<div className="outer-container">

			<nav id={context.navToggle} style={stickyClass}>
				<div className={"hamburger-wrapper"}>
					<HamburgerMenu />
				</div>
				<div className="nav-wrapper" >
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
					<ul className="nav-links">
						<li>
							<Link
								className={"nav-link"}
								to={"/about"}
								style={{ textDecoration: "none" }}
							>
								About
							</Link>
						</li>
						<li className={"nav-dropdown nav-link"}>
							<span  className={"dropdown-nav-name"}>Resources</span>
							<ul className={"dropdown-content"}>
								<li>
									<Link
										className={"nav-link"}
										to={"/projects"}
										style={{ textDecoration: "none" }}
									>
										Projects
									</Link>
								</li>
								<li>
									<Link
										className={"nav-link"}
										to={"/discovery"}
										style={{ textDecoration: "none" }}
									>
										Discovery
									</Link>
								</li>
								<li>
									<Link
										className={"nav-link"}
										to={"/glossary"}
										style={{ textDecoration: "none" }}
									>
										Glossary
									</Link>
								</li>
								{/*
								// Removed this link until podcast page becomes active.
								<li>
									<Link
										className={"nav-link"}
										to={"/podcast"}
										style={{ textDecoration: "none" }}
									>
										Podcast
									</Link>
								</li>
								*/}
							</ul>
						</li>
						{/* </div> */}

						{/*
						// Removed until blog page on Medium is back up.
						<li>
							<Link
								className={"nav-link"}
								to={"/blog"}
								style={{ textDecoration: "none" }}
							>
								Blog
							</Link>
						</li>
						*/}
						<li>
							<Link
								className={"nav-link"}
								to={"/contact"}
								style={{ textDecoration: "none" }}
							>
								Contact
							</Link>
						</li>
						{/* <li>
							<Link 
								className={"nav-link donate-page-link"} 
								to={'/donate'} 
								style={{textDecoration: 'none'}}
							>
								Donate
							</Link>
						</li> */}
						<a
							className="nav-link donate-page-link"
							href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
							target="_blank"
							rel="noreferrer"
						>
							Donate
						</a>
					</ul>
				</div>
			</nav>
		</div>
	);
}
