import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/spacelab.svg";
import "./hero.scss";

const Hero = () => {
	return (
		<>
			<nav className="donate-nav">
				<div className="nav-wrapper">
					<div className="logo-container">
						<Link
							className={"logo-nav"}
							to={"/"}
							style={{ textDecoration: "none" }}
						>
							<img src={Logo} alt="logo" />
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Hero;
