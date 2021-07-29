import {createContext} from "react";
import './App.css';
import Main from "./components/main";
import NavDesktop from "./components/navigation/navDesktop";

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
					<NavDesktop/>
					<Main/>
				</UniversalContext.Provider>
			</div>
		</div>
	);
}

export default App;
export const UniversalContext = createContext();
