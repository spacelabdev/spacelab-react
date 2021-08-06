
import React from "react";
import './about.css';
import HeroImage from "../../components/heroImage/heroImage";
import PlaceHolder from "../../assets/img_placeholder.png";
import useForm from "./useForm";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {

  const teamImages = [ PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, 
                      PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder, PlaceHolder ]

    const { formdata, handleChange } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })


  const handleSubmit = event => {
    event.preventDefault()
    window.alert(`Submitting ${JSON.stringify(formdata, null, 2)}`)
  }


	return (
		<>
			<HeroImage/>
      <section className="section-one">
        <h1 id="main-header">We're Space Lab</h1>
        <h4> Meet the team!</h4>
        <div className="team-picture-div">
            {teamImages.map(image => 
              <div><img className="team-picture" src={image} alt="placeholder" /></div>
            )}
        </div>
      </section>

      <section className="section-two">
        <div className="inner-section-two">
          <div className="left-div-section-two">
            <div>
            <img className="section-two-image" src={PlaceHolder} alt="placeholder" />
            </div>
          </div>
          <div className="right-div-section-two">
            <div>
              <h1 id="second-header">We're Space Lab</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ligula nisi, tristique ut massa.
              </p>
            </div>
            <div className="nested-div-two">
              <div className="nested-inner-div">
                <h4>Space Lab</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="nested-inner-div">
                <h4>Space Lab</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-three">
          <div className="section-three-inner-div">
            <div className="left-side-section-three">
              <div id="faq">FAQ</div>
              <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum ligula nisi, tristique ut massa.
              </div>
            </div>
          <div className="right-side-section-three">
            <div className="right-side-nested-div">
              <div className="question-div">
                <p>Extroplanet Question</p>
                <p>Habitable Zone</p>
                <p>Solar System</p>
                <p>Space Lab Question</p>
              </div>
              <div className="answer-div">
                <p>Answer</p>
                <p>Answer</p>
                <p>Answer</p>
                <p>Answer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-four">
        <div className="form-background">
          <div className="form-title">
            <p id="title-text">Contact us</p>
          </div>
          <div >
          <form onSubmit={handleSubmit}>
            <div className="first-input-row">
                <div className="field">
                    <label className="label">First Name*</label>
                    <div>
                      <input
                        className="small-input"
                        name="firstName"
                        value={formdata.firstName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Last Name*</label>
                    <div >
                      <input
                        className="small-input"
                        name="lastName"
                        value={formdata.lastName}
                        onChange={handleChange}
                      />
                    </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Email*</label>
                <div>
                  <input
                    className="large-input"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Phone</label>
                <div >
                  <input
                    className="large-input"
                    name="phone"
                    value={formdata.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Message</label>
                <div >
                  <textarea
                    className="message-input"
                    name="message"
                    value={formdata.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div >
                <button className="submit-button" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
	</>
	);
};