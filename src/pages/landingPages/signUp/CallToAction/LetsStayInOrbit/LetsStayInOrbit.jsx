export default function LetsStayInOrbit({text}) {
    return (
        <>
            <span className="cta-heading">Let's Stay In Orbit!</span>
            <br />
            <span className="cta-subheading">{text === "a" ? "Subscribe now and join our community of space enthusiasts!" : "Join our community of space enthusiasts by signing up for our newsletter! You'll be among the first to hear about the progress of our latest project, Exoplanetarium, which locates all known exoplanets. You'll get exclusive access to all the latest news and information about Exoplanetarium straight to your inbox."}</span>
        </>
     )
}