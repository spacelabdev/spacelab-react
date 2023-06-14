import "./Modal.css";

export default function Modal({ open, onClose, title, description }) {
	if (!open) return null;

	return (
		<>
			<div className="modal-container">
				<div className="modal-text">
					<span className="modal-heading">{title}</span>
					<span className="modal-subheading">{description}</span>
				</div>
			</div>
		</>
	);
}
