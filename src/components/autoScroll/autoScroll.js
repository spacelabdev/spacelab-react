import {useEffect} from "react";
import {withRouter} from "react-router-dom";

/**
 * Scrolls page to top, used in links and buttons. Default scroll value is instant.
 * If the desired result is that the user will see the scroll action, then smooth should be passed as the first parameter.
 * Different values can also be passed as the top and left parameters to change where the page loads or scrolls to,
 * but this is not recommended.
 * @param scroll {string} Valid values are "instant" or "smooth"
 * @param top {number}
 * @param left {number}
 * @param history
 * @returns {null}
 * @constructor
 */
function AutoScroll({scroll = "instant", top = 0, left = 0, history}) {
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scroll({
				top: top,
				left: left,
				behavior: scroll
			});
		});

		return () => {
			unlisten();
		};
	}, [history]);

	return null;
}

export default withRouter(AutoScroll);