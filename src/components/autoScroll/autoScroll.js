import {useEffect} from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Scrolls page to top, used in links and buttons. Default scroll value is instant.
 * If the desired result is that the user will see the scroll action, then smooth should be passed as the first parameter.
 * Different values can also be passed as the top and left parameters to change where the page loads or scrolls to,
 * but this is not recommended.
 * @param scroll
 * @param top
 * @param left
 * @param history
 * @returns {null}
 * @constructor
 */
const AutoScroll = ({scroll, top, left, history}) => {
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
	}, [scroll, top, left, history]);

	return null;
};

AutoScroll.propTypes = {
	/**
	 * Determines the scroll action. Default is 'instant', but 'smooth' can be passed for visible scrolling.
	 */
	scroll: PropTypes.string,
	/**
	 * What distance from the top should the auto scroll stop?
	 */
	top: PropTypes.number,
	/**
	 * What distance from the left should the window center on?
	 */
	left: PropTypes.number,
};

AutoScroll.defaultProps = {
	scroll: 'instant',
	top: 0,
	left: 0,
};

export default withRouter(AutoScroll);
