import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import AutoScroll from "../AutoScroll/AutoScroll";
import NewsletterSubscribe from "../formComponents/NewsletterSubscribe/NewsletterSubscribe";

/**
 * Renders the footer
 * @returns {JSX.Element}
 * @constructor
 */
export default function Footer() {
	const link_style = {
		textDecoration: "none",
	};

	return (
		<section className="footer-section">
			<div className="content-container">
				<div className="left-container">
					<NewsletterSubscribe />
				</div>
				<div className="right-container">
					<AutoScroll />
					<ul>
						<li>
							<Link to={"/about"} style={link_style}>
								About
							</Link>
						</li>
						<li>
							<Link to={"/projects"} style={link_style}>
								Projects
							</Link>
						</li>
						<li>
							<a
								className="link_style"
								href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
								target="_blank"
								rel="noreferrer"
								style={{ textDecoration: "none" }}
							>
								Donate
							</a>
						</li>
						<li>
							<Link to={"/contact"} style={link_style}>
								Contact Us
							</Link>
						</li>
						<li>
							<Link to={"/glossary"} style={link_style}>
								Glossary
							</Link>
						</li>
						<li>
							<Link to={"/blog"} style={link_style}>
								Blog
							</Link>
						</li>
						<li>
							<Link to={"/cookie-policy"} style={link_style}>
								Cookie Policy
							</Link>
						</li>
						<li>
							<Link to={"/privacy-policy"} style={link_style}>
								Privacy Policy
							</Link>
						</li>
						<li>
							<a
								href="https://app.termly.io/notify/84244fc8-3ee5-4874-a964-b5102a61463c"
								style={link_style}
							>
								Do Not Sell My Info
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="socialmedia-container">
				<center>
					<hr />
					<IconContext.Provider
						value={{ color: "var(--text)", size: "2rem" }}
					>
						<a
							href="https://www.linkedin.com/company/spacelab-space/"
							target="_blank"
							rel="noreferrer"
							title="Follow us on LinkedIn"
						>
							<FaLinkedin />
						</a>

						<a
							href="https://medium.com/@spacelabdev"
							target="_blank"
							rel="noreferrer"
							title="Read Spacelab articles on Medium"
						>
							<BsMedium />
						</a>

						<a
							href="https://www.instagram.com/spacelab_space"
							target="_blank"
							rel="noreferrer"
							title="Follow us on Instagram"
						>
							<AiOutlineInstagram />
						</a>
						<a
							href="https://twitter.com/SpaceLab_social"
							target="_blank"
							rel="noreferrer"
							title="Follow us on Twitter"
						>
							<AiOutlineTwitter />
						</a>
					</IconContext.Provider>
					<p>@2023 by SpaceLab</p>
				</center>
			</div>
		</section>
	);
}
