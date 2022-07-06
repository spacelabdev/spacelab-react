import { useEffect} from "react";
import { withRouter } from "react-router-dom";

/**
 * Scrolls page to top, used in links and buttons.
 */
function ScrollToTop({history}){
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "instant"
            });
        });

        return () => {
            unlisten();
        };
    }, [history]);

    return (null);
}

export default withRouter(ScrollToTop);