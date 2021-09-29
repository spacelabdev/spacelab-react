import {createContext, useEffect, useState} from "react";
import {glossaryTermsArray, returnFilteredTerms} from "./pages/glossary/glossaryhelper";
import './App.css';
import Main from "./components/main";

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
	/** Hero Image State */
	const [pageTitle, setPageTitle] = useState("");

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
