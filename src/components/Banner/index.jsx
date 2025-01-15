import React from "react";
import Button from "../Button";
import BannerStyle from '../Banner/style.js';

const Banner = () => {
    return (
        <BannerStyle>
            <div>
                <div className="perfil">
                    <img src="https://placehold.co/202x197" alt="Bruno's Image" />
                </div>
                <div>
                    <h2>I'm Bruno Sena</h2>
                    <h3>Development Fullstack</h3>
                </div>
            </div>

            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iste a quod. Doloribus odit maxime ipsum dolorum optio, nostrum non. Molestias, dolor! Tempore, hic. Doloremque est obcaecati delectus enim amet!
                </p>
            </div>

            <Button title={"Contact Me"} />
        </BannerStyle>
    )
}

export default Banner;