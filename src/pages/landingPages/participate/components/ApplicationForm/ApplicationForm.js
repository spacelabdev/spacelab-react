import "./ApplicationForm.scss";
import { useForm, ValidationError } from "@formspree/react";
import ThankYou from "../../ThankYou/ThankYou";

export default function ApplicationForm() {
	const [state, handleSubmit] = useForm("xoqzzpzj");

	if (state.succeeded) {
		return <ThankYou />;
	}

	return (
		<form
			id="application-form"
			className="p-application-form"
			onSubmit={handleSubmit}
		>
			<div>
				<label htmlFor="name">Full Name</label>
				<input type="text" id="name" name="name" required />
			</div>
			<div>
				<label htmlFor="email">Email Address</label>
				<input type="email" id="email" name="email" required />
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
			</div>
			<div>
				<label htmlFor="linkedin">LinkedIn Profile (optional)</label>
				<input type="url" id="linkedin" name="linkedin" />
				<ValidationError
					prefix="Message"
					field="interest"
					errors={state.errors}
				/>
			</div>
			<div>
				<label htmlFor="team">Team of Interest</label>
				<select id="team" name="team" required>
					<option default value="ux-ui-design">
						UX/UI Design
					</option>
					<option value="Front End Development">
						Front End Development
					</option>
					<option value="Back End Development">
						Back End Development
					</option>
					<option value="3D Development">3D Development</option>
					<option value="Data Science">Data Science</option>
					<option value="Marketing">Marketing</option>
					<option value="Creative Content">Creative Content</option>
					<option value="Finance">Finance</option>
				</select>
			</div>
			<div>
				<label htmlFor="application">
					Why are you interested in volunteering at SpaceLab?
				</label>
				<textarea id="application" name="application" required />
				<ValidationError
					prefix="Message"
					field="interest"
					errors={state.errors}
				/>
			</div>
		</form>
	);
}
