import React from "react";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <div>
                <div>
                    <span>Let's</span>
                    <span>Work Together -</span>
                </div>

                <div>
                    icone

                    Email
                </div>
            </div>

            <div>
                <div>
                    &copy; {year} all rights reserved.
                </div>
            </div>

        </footer>
    )
}

export default Footer;