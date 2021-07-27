import {createContext} from "react";
import './App.css';
import Main from "./components/main";
import Nav_desktop from "./components/navigation/nav_desktop";

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
                <Nav_desktop/>
                <Main/>
            </UniversalContext.Provider>
        </div>
    </div>
  );
}

export default App;
export const UniversalContext = createContext();
