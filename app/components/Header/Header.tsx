"use client";

import React, { useRef, useState } from "react";
import { Container, Toggle, BurgerMenu } from "./../UI/index";
import Link from "next/link";
import "./Header.scss";
import { usePathname } from "next/navigation";
import { useClickAway } from "react-use";

interface HeaderProps {
    inerrRef: any;
}

const Header = ({ inerrRef }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const ref = useRef(null);
    const data = [
        {
            link: "/projects",
            title: "Projects",
        },
        {
            link: "/skills",
            title: "Skills",
        },
        {
            link: "/contacts",
            title: "Contacts",
        },
    ];
    useClickAway(ref, () => {
        setIsOpen(false);
    });
    return (
        <>
            <header ref={inerrRef} className={`header ${isOpen ? "header-menu-open" : ""} `}>
                <Container className="header__container">
                    <nav className="nav">
                        <Link href="/" className="nav__logo logo">
                            <span>Sergey Kudryakov</span> portfolio
                        </Link>

                        <menu ref={ref} className="menu" id="nav-menu">
                            <ul className="menu__items">
                                {data.map((el) => {
                                    return (
                                        <li
                                            key={el.title}
                                            className="menu__item"
                                            onClick={() => setIsOpen(false)}>
                                            <Link
                                                href={el.link}
                                                className={`menu__link ${
                                                    pathname === el.link ? "active-link" : ""
                                                } `}>
                                                {el.title}
                                            </Link>
                                        </li>
                                    );
                                })}

                                {/* <Toggle /> */}
                            </ul>
                        </menu>

                        <BurgerMenu onClick={() => setIsOpen(!isOpen)} />
                    </nav>
                </Container>
            </header>
            <div className={`overlay-container ${isOpen ? "overlay-container__active" : ""}`}>
                <div className="overlay-backdrop "></div>
            </div>
        </>
    );
};
Header.displayName = "Header";
export default Header;
