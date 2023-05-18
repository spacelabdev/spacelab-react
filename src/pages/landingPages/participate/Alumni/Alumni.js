import "./Alumni.scss";
import lauraPhoto from "../assets/alumni-laura.png";
import angeliniesPhoto from "../assets/alumni-angelinies.png";
import { useEffect, useState } from "react";

export default function Alumni() {
	const [activeIndex, setActiveIndex] = useState(0);

	const alumni = {
		laura: {
			name: "Laura Hiller",
			position: "Software Development Intern",
			company: "Position",
			quote: '"Since joining, the organization has helped me become a better leader, collaborator, and engineer and it even contributed to my getting an internship as a Software Developer!”',
			photo: lauraPhoto,
		},
		angelinies: {
			name: "Angelinies Yaport-Garcia",
			position: "Senior Analyst Technical Writer",
			company: "Boomi",
			quote: '"Spacelab opened so many doors for me. Having this great opportunity on my resume helped in getting interviews and being able to talk about my work during those interviews.”',
			photo: angeliniesPhoto,
		},
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) =>
				prevIndex === Object.keys(alumni).length - 1 ? 0 : prevIndex + 1
			);
		}, 6000);

		return () => {
			clearInterval(interval);
		};
	});

	const handleClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<section className="participate-section alumni">
			<h2>SpaceLab Alumni</h2>
			<div className="alumni-carousel">
				<div className="alumni-carousel-slides">
					{Object.values(alumni).map((alumnus, index) => (
						<div
							key={index}
							className={`alumni-carousel-slide ${
								index === activeIndex ? "active" : ""
							}`}
						>
							<img
								src={alumnus.photo}
								alt={`Slide ${index + 1}`}
							/>
							<div className="text-content">
								<p className="quote">{alumnus.quote}</p>
								<p>
									{`- ${alumnus.name},`}
									<br />
									{`${alumnus.position} @ ${alumnus.company}`}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className="alumni-carousel-indicators">
					{Object.values(alumni).map((_, index) => (
						<div
							key={index}
							className={`alumni-carousel-indicator ${
								index === activeIndex ? "active" : ""
							}`}
							onClick={() => handleClick(index)}
						></div>
					))}
				</div>
			</div>
		</section>
	);
}
