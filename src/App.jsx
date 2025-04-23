import { createContext, useEffect, useState } from "react";
import RSSParser from "rss-parser";
import "./app.scss";
import Main from "./main";

/**
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
	/** Nav State */
	const [navToggle, setNavToggle] = useState("open");
	const [hamburgerToggle, setHamburgerToggle] = useState("open");
	const [hamburgerToggleIcon, setHamburgerToggleIcon] =
		useState("hamburger-toggle");
	/** Hero Image State */
	const [pageTitle, setPageTitle] = useState("");
	/** Medium Blog RSS Feed State */
	const [blogArray, setBlogArray] = useState([]);
	/** Cal Tech API Initial Data */
	const [exoplanetData, setExoplanetData] = useState(() => {
		const result = sessionStorage.getItem("exoplanetSearchResults");
		return result ? JSON.parse(result) : {};
	});

	/*
	// Get RSS feed from Medium for Blog page
	useEffect(() => {
		const parser = new RSSParser();
		const fetchPosts = async () => {
			const proxyUrl = "https://lit-headland-79401.herokuapp.com/";
			const url = `${proxyUrl}https://medium.com/feed/@spacelabdev/`;

			// Catch error from failing to fetch RSS feed. Prevents the full page popup from the error and limits UI issues.
			try {
				const feed = await parser.parseURL(url);
				setBlogArray(feed);
			} catch (error) {
				console.error("Failed to fetch RSS feed:", error);
				setBlogArray([]);
			}
			
		};
		fetchPosts();
	}, []);
	*/

	return (
		<div className="App">
			<div className={"content"}>
				<UniversalContext.Provider
					value={{
						navToggle,
						setNavToggle,
						hamburgerToggle,
						setHamburgerToggle,
						hamburgerToggleIcon,
						setHamburgerToggleIcon,
						pageTitle,
						setPageTitle,
						blogArray,
						setExoplanetData,
						exoplanetData,
					}}
				>
					<Main />
				</UniversalContext.Provider>
			</div>
		</div>
	);
}

export default App;
export const UniversalContext = createContext();
