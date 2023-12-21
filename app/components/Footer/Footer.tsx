"use client";

import Link from "next/link";
import React from "react";
import GitHub from "../../../public/icon/github.svg";
import Instagram from "../../../public/icon/instagram.svg";
import Linkedin from "../../../public/icon/linkedin.svg";
import { Container } from "./../UI/index";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer__container">
                <ul className="footer__items">
                    <li className="footer__item">
                        <a className="footer__link" href="https://github.com/Sikey747">
                            <GitHub />
                        </a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="https://www.instagram.com/sikey747/">
                            <Instagram />
                        </a>
                    </li>
                    <li className="footer__item">
                        <a
                            className="footer__link"
                            href="https://www.linkedin.com/in/sergeykudryakov/">
                            <Linkedin />
                        </a>
                    </li>
                </ul>
                <p className="footer__date">© 2024 ice.com</p>
            </Container>
        </footer>
    );
};

export default Footer;
