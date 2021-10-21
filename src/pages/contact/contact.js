import React from "react";
import './contact.scss';
import HeroImage from "../../components/heroImage/heroImage";
import Footer from "../../components/footer/footer";
import ContactForm from "../../components/contactForm/contactForm";

export default function Contact(){
    return (
        <>
        <HeroImage/>
        <ContactForm/>
        <Footer/>
        </>
    )
}