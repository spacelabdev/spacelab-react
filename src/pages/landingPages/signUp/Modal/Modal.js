import './Modal.scss'

export default function Modal(props){
    return (
        <div className="signup-modal">
            <h3 className="closeBtn">X</h3>
            <div className="content">
                <h1> Let's Stay in Orbit!</h1>
                <h3 className="CTA-small-text">Subscribe now, and join our community of space enthusiasts</h3>
                {/* email input goes here */}
            </div>
        </div>
    )
}