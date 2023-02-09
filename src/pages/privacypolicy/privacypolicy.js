import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import {Link} from "react-router-dom";
import "./privacypolicy.scss";

/**
 * Renders Blog page
 * @returns {JSX.Element}
 * @constructor
 */
export default function PrivacyPolicy() {
	return (
		<>
			<HeroImage heroTitle="PRIVACY POLICY" />

            <div className="privacy-wrap">
                <p>Last Updated On 30-Jan-2023</p>
                <p>Effective Date 30-Jan-2023</p>
                <br/> 
                <p>
                    This Privacy Policy describes the policies of
                    The Spacelab,N/A,CA95060,United States of America (the),email: info@spacelab.space,
                    phone: 831-555-5555 on the collection,
                    use and disclosure of your information that we collect
                    when you use our website ( http://spacelab.space ).
                    (the “Service”). By accessing or using
                    the Service, you are consenting to the collection, use and
                    disclosure of your information in accordance with this
                    Privacy Policy. If you do not consent to the same,
                    please do not access or use the Service.
                </p>
                <br/>    
                <p>
                    We may modify this Privacy Policy at any time without
                    any prior notice to you and will post the revised
                    Privacy Policy on the Service. The revised Policy will
                    be effective 180 days from when the
                    revised Policy is posted in the Service and your
                    continued access or use of the Service after such time
                    will constitute your acceptance of the revised Privacy
                    Policy. We therefore recommend that you periodically
                    review this page.
                </p>
                <br/> 
                <h5>How We Use Your Information:</h5>

                <p>
                    We will use the information that we collect
                    about you for the following purposes:
                </p>
                <ul>
                    <li>Marketing/ Promotional</li>
                    <li>Customer feedback collection</li>
                    <li>Support</li>
                    <li>Administration info</li>
                </ul>
                <p>
                    If we want to use your information for any other
                    purpose, we will ask you for consent and will
                    use your information only on receiving your
                    consent and then, only for the purpose(s) for
                    which grant consent unless we are required to do
                    otherwise by law.
                </p>
                <br/> 
                <h5>Your Rights:</h5>
                <p>Depending on the law that applies, you may have
                    a right to access and rectify or erase your
                    personal data or receive a copy of your personal
                    data, restrict or object to the active
                    processing of your data, ask us to share (port)
                    your personal information to another entity,
                    withdraw any consent you provided to us to
                    process your data, a right to lodge a complaint
                    with a statutory authority and such other rights
                    as may be relevant under applicable laws. To
                    exercise these rights, you can write to us at
                    info@spacelab.space.
                    We will respond to your
                    request in accordance with applicable law.
                </p>
                <br/> 
                <p>
                    You may opt-out of direct marketing
                    communications or the profiling we carry out for
                    marketing purposes by writing to us at
                    info@spacelab.space.
                </p>
                <br/> 
                <p>
                    Do note that if you do not allow us to collect
                    or process the required personal information or
                    withdraw the consent to process the same for the
                    required purposes, you may not be able to access
                    or use the services for which your information
                    was sought.
                </p>
                <br/> 
                <h5>Cookies Etc.</h5>
                <p>
                    To learn more about how we use these
                    and your choices in relation to these tracking
                    technologies, please refer to our
                    <Link to={"/cookie-policy"}> Cookie Policy</Link>
                </p>
                <br/> 
                <h5>Security:</h5>
                <p>
                    The security of your information is important to
                    us and we will use reasonable security measures
                    to prevent the loss, misuse or unauthorized
                    alteration of your information under our
                    control. However, given the inherent risks, we
                    cannot guarantee absolute security and
                    consequently, we cannot ensure or warrant the
                    security of any information you transmit to us
                    and you do so at your own risk.
                </p>
                <br/> 
                <h5>Third Party Links & Use Of Your Information:</h5>
                <p>
                    Our Service may contain links to other websites
                    that are not operated by us. This Privacy Policy
                    does not address the privacy policy and other
                    practices of any third parties, including any
                    third party operating any website or service
                    that may be accessible via a link on the
                    Service. We strongly advise you to review the
                    privacy policy of every site you visit. We have
                    no control over and assume no responsibility for
                    the content, privacy policies or practices of
                    any third party sites or services.
                </p>
                <br/> 
                <h5>Grievance / Data Protection Officer:</h5>
                <p>
                    If you have any queries or concerns about the
                    processing of your information that is available
                    with us, you may email our Grievance Officer at
                    The Spacelab,
                    N/A,
                    email: info@spacelab.space.
                    We will address your concerns in accordance with applicable law.
                </p>
                <br/> 
                <p>
                    Privacy Policy generated with  <a href="https://www.cookieyes.com/?utm_source=PP&utm_medium=footer&utm_campaign=UW">CookieYes</a>.
                </p> 
                <br/> 
                <p>California Residents: 
                    <a href="https://app.termly.io/notify/84244fc8-3ee5-4874-a964-b5102a61463c"> Do not sell my info</a>
                </p>
                <br/> 
                <p>NOTE: We are using Google Analytics Advertising cookies. We and third-party 
                    vendors use first-party cookies (such as the Google Analytics cookie) or other 
                    first-party identifiers, and third-party cookies (such as Google advertising cookies) 
                    or other third-party identifiers in order to inform how we should advertise SpaceLab, 
                    and so we can make SpaceLab better when it appears users are struggling with the website 
                    or products. You can opt-out of the Google Analytics Advertising Features below under 
                    Manage Cookie Preferences. Also Google Analytics' currently available opt-outs for the 
                    web: https://tools.google.com/dlpage/gaoptout/
                </p>
            </div>
			<Footer />
		</>
	);
}
