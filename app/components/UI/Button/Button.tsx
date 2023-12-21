import React from "react";
import "./Button.scss";

interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
}

function Button({ children, className }: ButtonProps) {
    return (
        <button type="button" className={`${className}`}>
            {children}
        </button>
    );
}

export default Button;
