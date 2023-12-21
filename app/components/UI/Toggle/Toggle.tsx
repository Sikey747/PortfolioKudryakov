// "use client";
import "./Toggle.scss";
import Sun from "../../../../public/icon/sun.svg";
import Moon from "../../../../public/icon/moon.svg";

function Toggle() {
    return (
        <label className="toggle-switch">
            <input className="toggle-input" type="checkbox" />
            <div className="toggle-switch-background">
                <div className="toggle-switch-handle"></div>
                <Sun />
                <Moon />
            </div>
        </label>
    );
}

export default Toggle;
