import React, {useState} from "react";
import "./signUp.scss";
import Navigation from "../../../components/navigation/mainNavMenu/navigation"
import Modal from "../../../components/forms/newsletterSubscribe/signUpModal/Modal"
import Home from "../../home/home"

/**
 * Renders Sign Up Landing page
 * @returns {JSX.Element}
 * @constructor
 */
export default function SignUp() {
	const [openModal, setOpenModal] = useState(false)
	const onClose = () => { 
		setOpenModal(false)
	}

	React.useEffect(() => {
        setTimeout(() => {
            setOpenModal(true)
        }, 1000)
    }, [setOpenModal])

	return (
		<>
			<div onClick={onClose} className={`${openModal ? "overlay" : ""}`}></div>
			<Modal open={openModal} onClose={onClose} />
			<Home className="modal-home"/>
		</>
	);
}
