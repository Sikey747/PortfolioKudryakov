"use client";

import React, { useState } from "react";
import "./BurgerMenu.scss";

interface BurgerMenuProps {
    onClick: () => void;
}

function BurgerMenu({ onClick }: BurgerMenuProps) {
    return (
        <button onClick={onClick} className="burger-menu" type="button" data-menu-icon>
            <span></span>
        </button>
    );
}

export default BurgerMenu;
