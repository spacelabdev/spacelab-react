export default function ThankYou({text}) {
    return (
        <>
            <span className="cta-heading">Thank You!</span>
            <br />
            <span className="cta-subheading"> {text === "a" ? "You have now subscribed to our email newsletter. You should receive a confirmation email soon. Ad Astra!🚀" : "You are now a part of the SpaceLab community! We appreciate your subscription to our newsletter and look forward to sharing the latest updates on space exploration and our projects.  Ad Astra!🚀"}</span>
        </>
     )
}