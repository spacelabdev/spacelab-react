import {createContext, useEffect, useState} from "react";
import {findFirstThird, glossaryTermsArray} from "./pages/glossary/glossaryhelper";
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

	// Set initial state for glossaryTerms on app load
	useEffect(() => {
		setGlossaryTerms(findFirstThird());
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
						setCurrentGlossaryTerm
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
