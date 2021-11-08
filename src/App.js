import {createContext, useEffect, useState} from "react";
import RSSParser from "rss-parser";
import {glossaryTermsArray, returnFilteredTerms} from "./pages/glossary/glossaryhelper";
import './App.css';
import Main from "./main";

/**
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
	/** Nav State */
	const [navToggle, setNavToggle] = useState("open");
	const [hamburgerToggle, setHamburgerToggle] = useState("open");
	const [hamburgerToggleIcon, setHamburgerToggleIcon] = useState("hamburger-toggle");
	/** Glossary Page State */
	const [glossaryTerms, setGlossaryTerms] = useState();
	const [currentGlossaryTerm, setCurrentGlossaryTerm] = useState(glossaryTermsArray[0][0]);
	const [glossaryTermDef, setGlossaryTermDef] = useState(glossaryTermsArray[0][1]);
	const [glossaryTermImg, setGlossaryTermImg] = useState(glossaryTermsArray[0][3]);
	/** Hero Image State */
	const [pageTitle, setPageTitle] = useState("");
	/** Medium Blog RSS Feed State */
	const [blogArray, setBlogArray] = useState([]);

	// Get RSS feed from Medium for Blog page
	useEffect(() => {
		const parser = new RSSParser();
		const fetchPosts = async () => {
			const proxyUrl = 'https://spacelab-cors-anywhere.herokuapp.com/';
			const url = `${proxyUrl}https://medium.com/feed/@spacelabdev/`;
			const feed = await parser.parseURL(url);
			setBlogArray(feed);
		}
		fetchPosts();
	}, []);

	// Set initial state for glossaryTerms on app load
	useEffect(() => {
		setGlossaryTerms(returnFilteredTerms(1, 9));
	}, []);

	return (
		<div className="App">
			<div className={'content'}>
				<UniversalContext.Provider value={
					{
						navToggle,
						setNavToggle,
						hamburgerToggle,
						setHamburgerToggle,
						hamburgerToggleIcon,
						setHamburgerToggleIcon,
						glossaryTerms,
						setGlossaryTerms,
						glossaryTermDef,
						setGlossaryTermDef,
						glossaryTermImg,
						setGlossaryTermImg,
						currentGlossaryTerm,
						setCurrentGlossaryTerm,
						pageTitle,
						setPageTitle,
						blogArray
					}
				}>
					<Main/>
				</UniversalContext.Provider>
			</div>
		</div>
	);
}

export default App;
export const UniversalContext = createContext();
