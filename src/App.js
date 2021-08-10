import {createContext, useEffect, useState} from "react";
import {findFirstThird, glossaryTermsArray} from "./pages/glossary/glossaryhelper";
import {getExoplanets} from "./services/calTechApiHelper";
import Main from "./components/main";
import './App.css';

/**
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
	const [glossaryTerms, setGlossaryTerms] = useState();
	const [currentGlossaryTerm, setCurrentGlossaryTerm] = useState(glossaryTermsArray[0][0]);
	const [glossaryTermDef, setGlossaryTermDef] = useState(glossaryTermsArray[0][1]);
	const [pageTitle, setPageTitle] = useState("");
	const [exoplanetData, setExoplanetData] = useState(() => {
		const result = sessionStorage.getItem('exoplanetSearchResults');
		return result ? JSON.parse(result) : {}
	});

	// Set initial state for glossaryTerms on app load
	useEffect(() => {
		setGlossaryTerms(findFirstThird());
	}, []);

	// Get initial information from cal tech data base. Save to session storage.
	// TODO: Probably don't want this to run with every re render. Eventually relocate to search button. This is for testing.
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

	if (exoplanetData !== undefined) {
		console.log(exoplanetData);
	}

	return (
		<div className="App">
			<div className={'content'}>
				<UniversalContext.Provider value={
					{
						glossaryTerms,
						setGlossaryTerms,
						glossaryTermDef,
						setGlossaryTermDef,
						currentGlossaryTerm,
						setCurrentGlossaryTerm,
						pageTitle,
						setPageTitle
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
