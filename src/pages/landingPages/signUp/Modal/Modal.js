import "./Modal.scss"

export default function Modal({open, onClose}){
    if (!open) return null

    return (
            <div className="modal-container">
                <h3 onClick={onClose} className="close-modal">X</h3>
                <div className="modal-text">
                    <h1 className="modal-heading"> Let's Stay in Orbit!</h1>
                    <h3 className="modal-subheading">Subscribe now, and join our community of space enthusiasts</h3>
                    {/* email input goes here */}
                </div>
            </div>
    )
}