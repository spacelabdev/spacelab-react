import {createContext} from "react";
import './App.css';
import Main from "./components/main";

/**
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
	return (
		<div className="App">
			<div className={'content'}>
				<UniversalContext.Provider value={
					{

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
