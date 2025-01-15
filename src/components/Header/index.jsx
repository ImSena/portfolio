import React from "react";
import { CiBrightnessDown } from "react-icons/ci";
import HeaderStyle from "./style";

const Header = () => {
    return (
        <HeaderStyle>
            <div className="logo">
                <h1>ImSena</h1>
            </div>

            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>Resume</li>
                </ul>

            </nav>


            <button>
                Contact Me
            </button>




            <div className="theme">
                <CiBrightnessDown size={30} />
            </div>
        </HeaderStyle>
    );
}

export default Header;