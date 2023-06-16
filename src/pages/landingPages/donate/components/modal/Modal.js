import Modal from "react-bootstrap/Modal";
import "./modal.scss";
import { useState } from "react";

const text =
	"We appreciate your generosity and willingness to donate to our cause! We currently accept payment by credit card through our Paypal partner portal for added security. Thank you for your understanding!";

export default function ShowModal({ open }) {
	const [show, setShow] = useState(open);

	const handleClose = () => setShow(false);

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body className="modal-text">{text}</Modal.Body>
			</Modal>
		</>
	);
}
