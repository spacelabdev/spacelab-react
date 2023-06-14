import ROCKET_ICON_IMAGE from "../../assets/icon _rocket.png";
import STAR_ICON from "../../assets/small_star.svg";
import "./donateSuccessMessage.scss";

const DonateSuccessMessage = () => {
	return (
		<section id="donate-success-wrapper">
			{/* Donate Header text*/}
			<div className="donate-success-content">
				<div className="donate-success-header">
					<h4 className="donate-title">
						THANK YOU FOR YOUR DONATION!
					</h4>
					<p className="custom-text--large donate-subtext">
						Your generous donation to SpaceLab is greatly
						appreciated. With your support, we can make a real
						difference in the lives of aspiring individuals,
						providing them with the economic support they need to
						explore new career paths in science and technology.
						<img
							src={STAR_ICON}
							alt="star_icon"
							className="star1_success star_success_icon"
						/>
						<img
							src={STAR_ICON}
							alt="star_icon"
							className="star2_success star_success_icon"
						/>
						<img
							src={STAR_ICON}
							alt="star_icon"
							className="star3_success star_success_icon"
						/>
					</p>
				</div>
				<div className="icon-container-success">
					<img
						src={ROCKET_ICON_IMAGE}
						alt={"rocket ship icon"}
						className="rocket-ship-icon"
					/>
				</div>
			</div>
		</section>
	);
};

export default DonateSuccessMessage;
