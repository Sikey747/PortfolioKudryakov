"use client";

import React from "react";
import { Container, Button } from "./../UI/index";
import Image from "next/image";
import "./Hero.scss";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

function Hero() {
    return (
        <section className="action" data-fullscreen>
            <Container className="action__container">
                <Image
                    className="action__decor"
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="
                    data-src="@img/icon/Abstract.png"
                    alt="decor"
                    fill
                />
                <div className="action__tex-block">
                    <TypeAnimation
                        sequence={["Hi, my name is Sergey a frontend developer! ", 7000]}
                        wrapper="h1"
                        repeat={Infinity}
                        className="action__title"
                        // style={{ fontSize: "2em", display: "inline-block" }}
                    />

                    <p className="action__text">with passion for learning and creating.</p>
                    <Link href="/contacts">
                        <Button className="action__button button button__primary" data-ripple>
                            Contact My
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
}

export default Hero;
