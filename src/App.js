import {createContext, useEffect, useState} from "react";
import {glossaryTermsArray, returnFilteredTerms} from "./pages/glossary/glossaryhelper";
import './App.css';
import Main from "./components/main";

/**
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
	const [glossaryTerms, setGlossaryTerms] = useState();
	const [currentGlossaryTerm, setCurrentGlossaryTerm] = useState(glossaryTermsArray[0][0]);
	const [glossaryTermDef, setGlossaryTermDef] = useState(glossaryTermsArray[0][1]);
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
