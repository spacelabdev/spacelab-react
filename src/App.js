import {createContext, useEffect, useState} from "react";
import {findFirstHalf} from "./pages/glossary/glossaryhelper";
import './App.css';
import Main from "./components/main";

/**
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
	const [glossaryTerms, setGlossaryTerms] = useState();

	// Set initial state for glossaryTerms on app load
	useEffect(() => {
		setGlossaryTerms(findFirstHalf());
	}, []);

	return (
		<div className="App">
			<div className={'content'}>
				<UniversalContext.Provider value={
					{
						glossaryTerms,
						setGlossaryTerms,
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
