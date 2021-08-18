import React, {useState} from "react";
import "./footer.scss";
import {Link} from "react-router-dom";

/**
 * @returns {JSX.Element}
 * @constructor
 */

export default function Footer() {
	const [email, setEmail] = useState("");
	const link_style = {
		textDecoration: 'none',
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
						<li><Link to={'/about'} style={link_style}>About</Link></li>
						<li>FAQ</li>
						<li>Help</li>
						<li>Terms of Use</li>
						<li><Link to={'/blog'} style={link_style}>Blog</Link></li>
					</ul>
				</div>
			</div>
		</section>
	);
}
