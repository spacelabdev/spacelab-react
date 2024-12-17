import PropTypes from "prop-types";
import "./sliderNav.scss";
import MobileSliderNav from "./MobileSlider/MobileSliderNav";
/**
 * Renders the Nav bar for the sliders
 * @param navObjects
 * @param navFilter
 * @param activeSlide
 * @param setActive
 * @param status
 * @param setStatus
 * @returns {JSX.Element}
 * @constructor
 */
const SliderNav = ({
	navObjects,
	activeSlide,
	setActive,
	status,
	setStatus,
	setShowAll,
	setShowCurrent,
	setShowPast,
}) => {
	const handleChange = (event) => {
		const updatedStatus = event.target.value;
		setStatus(updatedStatus);
		if (updatedStatus === "all") {
			setShowAll(true);
			setShowCurrent(false);
			setShowPast(false);
		  } else if (updatedStatus === "current") {
			setShowAll(false);
			setShowCurrent(true);
			setShowPast(false);
		  } else if (updatedStatus === "past") {
			setShowAll(false);
			setShowCurrent(false);
			setShowPast(true);
		  }
	};
	// const handleTeamChange = (event) => {
	// 	const updatedTeam = event.target.value;
	// 	setActive(updatedTeam);
	// };
	// const MyIcon = (props) => {
	// 	const { style, ...otherProps } = props;
	// 	const colorStyle = {
	// 		color: "white",
	// 	};
	// 	const styles = { ...style, ...colorStyle };
	// 	return <AiOutlineRight {...otherProps} style={styles} />;
	// };

	return (
		<>
			{/* <div className={"menu"}>
				<div className={`slider-nav-button-container`}>
					<div className="status-container" style={{ width: "100%" }}>
						<h4>Filter by Satus</h4>
						<form >
							<div className="status-item">
								<label>
									<input
										type="radio"
										value="all"
										checked={status === 'all'}
										onChange={handleChange}
									/>
									All
								</label>
							</div>
							<div className="status-item">
								<label>
									<input
										type="radio"
										value="current"
										checked={status === 'current'}
										onChange={handleChange}
									/>
									Current
								</label>
							</div>
							<div className="status-item">
								<label>
									<input
										type="radio"
										value="past"
										checked={status === 'past'}
										onChange={handleChange}
									/>
									Past
								</label>
							</div>
						</form>
					</div>
					<div className="job-title-container" id="select-form" style={{ width: "100%" }}>
						<h4>Filter by Job Title</h4>
						<div className="category-items">
								<div className="category-item" onClick={() => setActive("All Teams")}>
									All Teams
								</div>
								{navObjects.map((navObject, index) => (
									<div
										className="category-item"
										key={index}
										onClick={() => setActive(navObject.title)} 
									>
										{navObject.title}
									</div>
								))}	
						</div>

					</div>
				</div>
			</div> */}
			<MobileSliderNav 
				{...{
					navObjects,
					activeSlide,
					setActive,
					status,
					setStatus,
					setShowAll,
					setShowCurrent,
					setShowPast,
				}} 
				handleChange={handleChange} />
		</>
	);
};

SliderNav.propTypes = {
	/**
	 * Array of nav objects which include the title to be displayed as the nav link,
	 * and the flag that is check to see if the nav link should be underlined as active.
	 */
	navObjects: PropTypes.array,
	/**
	 * State which is set to the current active slide
	 */
	activeSlide: PropTypes.string,
	/**
	 * Function to update the activeSlide state variable to a new activeSlide
	 */
	setActive: PropTypes.func,
};

SliderNav.defaultProps = {
	navObjects: null,
	activeSlide: null,
	setActive: null,
};

export default SliderNav;
