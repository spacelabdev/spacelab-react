import React, {useState} from "react";
import "./footer.scss";
import {Link} from "react-router-dom";
import {IconContext} from "react-icons";
import {AiOutlineLinkedin, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function Footer() {
	const [email, setEmail] = useState("");
	const link_style = {
		textDecoration: "none",
	};

	function handleChange(e) {
		setEmail(e.target.value);
	}

	function handleSubscription(e) {
		e.preventDefault();
		alert("Subscription Coming Soon!");
	}

	return (
		<section className="footer-section">
			<div className="content-container">
				<div className="left-container">
					<h2>Subscribe to our newsletter</h2>
					<p>
						Sign up to learn about the latest discoveries, news and
						more! Delivered weekly.
					</p>
					<form
						className="subscription-form"
						onSubmit={handleSubscription}
					>
						<input
							type="email"
							id="email"
							placeholder="EMAIL"
							value={email}
							onChange={handleChange}
						/>
						<button type="submit">Subscribe</button>
					</form>
				</div>
				<div className="right-container">
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
						{/* <li>
							<Link to={"/donate"} style={link_style}>
								Donate
							</Link>
						</li> */}
						<li>
							<a
								className="link_style"
								href="https://www.paypal.com/donate/?hosted_button_id=PK9D4A3HEWV8C"
								target="_blank"
								rel="noreferrer"
								style={{textDecoration: "none"}}
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
						{/*Hidden until terms of use page is created*/}
						{/*<li>Terms of Use</li>*/}
					</ul>
				</div>
			</div>
			<div className="socialmedia-container">
				<center>
					<hr/>
					{/* TODO: fill in the usernames for the social media links below */}
					<IconContext.Provider
						value={{color: "D9D9D9", size: "2rem"}}
					>
						<a href="https://www.linkedin.com/company/spacelab-space/">
							<AiOutlineLinkedin/>
						</a>
						{/* <a href="https://www.instagram.com/{Spacelab}"> */}
						<AiOutlineInstagram/>
						{/* </a> */}
						{/* <a href="https://twitter.com/{SpaceLab}"> */}
						<AiOutlineTwitter/>
						{/* </a> */}
					</IconContext.Provider>
					<h5>@2021 by SpaceLab</h5>
				</center>
			</div>
		</section>
	);
}
