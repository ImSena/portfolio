import React from "react";


const Header = () => {
    return (
        <header>
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

            <div>
                <button>
                    Contact Me
                </button>
            </div>

            <div className="theme" style={{width: 24}}>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </header>
    );
}

export default Header;