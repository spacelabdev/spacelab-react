import "./ApplicationForm.scss";

export default function ApplicationForm() {
	return (
		<form id="application-form" className="p-application-form">
			<div>
				<label for="name">Full Name</label>
				<input type="text" id="name" name="name" required />
			</div>
			<div>
				<label for="email">Email Address</label>
				<input type="email" id="email" name="email" required />
			</div>
			<div>
				<label for="linkedin">LinkedIn Profile (optional)</label>
				<input type="url" id="linkedin" name="linkedin" />
			</div>
			<div>
				<label for="team">Team of Interest</label>
				<select id="team" name="team" required>
					<option value="Data Science">Data Science</option>
					<option value="UX/UI Design">UX/UI Design</option>
					<option value="Marketing">Marketing</option>
					<option value="Software Engineering">
						Software Engineering
					</option>
					<option value="Content Creation">Content Creation</option>
				</select>
			</div>
			<div>
				<label for="interest">
					Why are you interested in volunteering at SpaceLab?
				</label>
				<textarea id="interest" name="interest" required />
			</div>
		</form>
	);
}
