import React from "react";
import { Container } from "./../components/UI/index";
import "./Contacts.scss";

function ContactsPage() {
    return (
        <section className="contacts">
            <Container className="contacts__container">
                <h1 className="contacts__title">Contacts</h1>
                <h2 className="contacts__sub-title">Location</h2>
                <p className="contacts__text">Kharkiv, Ukraine</p>
                <h2 className="contacts__sub-title">Telegram / WhatsApp</h2>
                <a className="contacts__text" href="https://t.me/Sikey747">
                    +380 95 808 78 56
                </a>
                <h2 className="contacts__sub-title">Email</h2>
                <a
                    className="contacts__text contacts__link"
                    href="mailto:kudryakovsergeyon@gmail.com">
                    kudryakovsergeyon@gmail.com
                </a>
            </Container>
        </section>
    );
}

export default ContactsPage;
