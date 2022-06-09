import { useEffect} from "react";
import { withRouter } from "react-router-dom";

/**
 * Scrolls page to top, used in links and buttons.
 */
function ScrollToTop({history}){
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });

        return () => {
            unlisten();
        };
    }, []);

    return (null);
}

export default withRouter(ScrollToTop);