import {createContext, useEffect, useState} from "react";
import RSSParser from "rss-parser";
import Main from "./main";
import {getExoplanets} from "./services/calTechApiHelper";
import {glossaryTermsArray, returnFilteredTerms} from "./pages/glossary/glossaryhelper";
import './App.css';

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
	/** Cal Tech API Initial Data */
	const [exoplanetData, setExoplanetData] = useState(() => {
		const result = sessionStorage.getItem('exoplanetSearchResults');
		return result ? JSON.parse(result) : {}
	});

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




	// Get initial information from cal tech data base. Save to session storage.
	// TODO: Don't want this to run with every re render.
	useEffect(() => {
		const queryExoplanetDatabase = async () => {
			await getExoplanets().then(res => {
				if (res.status === 200) {
					setExoplanetData(res.data);
					sessionStorage.setItem('exoplanetSearchResults', JSON.stringify(res.data));
				} else {
					console.log("error retrieving exoplanetData");
				}
			}).catch(e => {
				console.log(e);
			});
		};
		queryExoplanetDatabase();
	}, []);

	// TODO: Delete this for production or when no longer needed. For development only.
	if (exoplanetData !== undefined) {
		console.log(exoplanetData);
	}




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
